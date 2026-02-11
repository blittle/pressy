// src/runtime/client.ts
import { signal, effect } from "@preact/signals";
var currentRoute = signal("/");
var currentTheme = signal("light");
var paginationMode = signal("scroll");
var currentPage = signal(0);
var isOffline = signal(!navigator.onLine);
var DB_NAME = "pressy";
var DB_VERSION = 1;
var PROGRESS_STORE = "reading-progress";
var UNLOCKS_STORE = "unlocks";
var db = null;
async function initDB() {
  if (db) return db;
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };
    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains(PROGRESS_STORE)) {
        database.createObjectStore(PROGRESS_STORE, { keyPath: "chapterSlug" });
      }
      if (!database.objectStoreNames.contains(UNLOCKS_STORE)) {
        database.createObjectStore(UNLOCKS_STORE, { keyPath: "bookSlug" });
      }
    };
  });
}
async function saveReadingProgress(progress) {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const tx = database.transaction(PROGRESS_STORE, "readwrite");
    const store = tx.objectStore(PROGRESS_STORE);
    const request = store.put(progress);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
async function getReadingProgress(chapterSlug) {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const tx = database.transaction(PROGRESS_STORE, "readonly");
    const store = tx.objectStore(PROGRESS_STORE);
    const request = store.get(chapterSlug);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}
async function isBookUnlocked(bookSlug) {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const tx = database.transaction(UNLOCKS_STORE, "readonly");
    const store = tx.objectStore(UNLOCKS_STORE);
    const request = store.get(bookSlug);
    request.onsuccess = () => resolve(!!request.result);
    request.onerror = () => reject(request.error);
  });
}
async function unlockBook(bookSlug, orderId) {
  const database = await initDB();
  return new Promise((resolve, reject) => {
    const tx = database.transaction(UNLOCKS_STORE, "readwrite");
    const store = tx.objectStore(UNLOCKS_STORE);
    const request = store.put({ bookSlug, orderId, unlockedAt: Date.now() });
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
function navigate(path, replace = false) {
  if (replace) {
    history.replaceState(null, "", path);
  } else {
    history.pushState(null, "", path);
  }
  currentRoute.value = path;
}
function setTheme(theme) {
  currentTheme.value = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("pressy-theme", theme);
}
function loadTheme() {
  const saved = localStorage.getItem("pressy-theme");
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  }
}
function setPaginationMode(mode) {
  paginationMode.value = mode;
  localStorage.setItem("pressy-pagination", mode);
}
function loadPaginationMode() {
  const saved = localStorage.getItem("pressy-pagination");
  if (saved) {
    paginationMode.value = saved;
  }
}
function setupKeyboardNav() {
  document.addEventListener("keydown", (e) => {
    if (paginationMode.value !== "paginated") return;
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      currentPage.value++;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentPage.value > 0) {
        currentPage.value--;
      }
    }
  });
}
function setupOfflineDetection() {
  window.addEventListener("online", () => {
    isOffline.value = false;
  });
  window.addEventListener("offline", () => {
    isOffline.value = true;
  });
}
function hydrate(data) {
  currentRoute.value = data.route;
  loadTheme();
  loadPaginationMode();
  setupKeyboardNav();
  setupOfflineDetection();
  initDB();
  window.addEventListener("popstate", () => {
    currentRoute.value = window.location.pathname;
  });
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#")) return;
    e.preventDefault();
    navigate(href);
  });
}
export {
  currentPage,
  currentRoute,
  currentTheme,
  effect,
  getReadingProgress,
  hydrate,
  isBookUnlocked,
  isOffline,
  navigate,
  paginationMode,
  saveReadingProgress,
  setPaginationMode,
  setTheme,
  signal,
  unlockBook
};
//# sourceMappingURL=client.js.map