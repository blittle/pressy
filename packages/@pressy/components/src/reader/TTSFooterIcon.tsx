import type { TTSProps } from "./types.js";

export function TTSFooterIcon({ ttsProps }: { ttsProps?: TTSProps }) {
  if (!ttsProps || !ttsProps.supported) return null;

  const isPlaying = ttsProps.isPlaying;

  return (
    <button
      class={`pressy-tts-icon ${isPlaying ? "pressy-tts-icon--playing" : ""}`}
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
        ttsProps.onToggle();
      }}
      aria-label={isPlaying ? "Stop listening" : "Listen to this chapter"}
      title={isPlaying ? "Stop listening" : "Listen"}
    >
      {isPlaying ? (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="18"
          height="18"
        >
          <rect x="6" y="6" width="12" height="12" rx="1" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="18"
          height="18"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )}
    </button>
  );
}
