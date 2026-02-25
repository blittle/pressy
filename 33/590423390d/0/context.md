# Session Context

## User Prompts

### Prompt 1

There are two big problems that remain:

1. The page restoration. Even though we store chapter and page inside local storage, sometimes the _wrong_ page is restored, like always going one page further, or one page back. I think this has to do with the snap to page and or the animation timing. Maybe something else though.

2. When going backwards, to previous pages, when I hit a previous chapter the transition sucks because the new chapter gets loaded then the animation to the last page of the ch...

### Prompt 2

Sometimes going backwards, when loading a previous chapter, instead for some reason a chapter loads that is towards the end of the book

### Prompt 3

Why would it jump to the end of the book sometimes when going backwards?

### Prompt 4

Something isn't wired up right, I can easily reproduce going backwards from one chapter to the previous. The scroll position ends up at the _end of the book_. But at the same time the table of contents popup says that we did go to the previous chapter. So some state isn't right where the scroll is getting screwed up. Would it be when going to the previous chapter, after that chapter loads, something is sending the scroll to the end of the chapter, but that's really sending the user to the end of...

### Prompt 5

That appeared to work. Another thing that might make the ux a bit better is when at the beginning of a chapter, it would be nice if there is always at least a full screen size before the current page, even if it is empty, so that the swiping appears to move the content.

### Prompt 6

Could I add a new npm script that runs the dev server for both pressy dev and also the flatland example? I'd want to make sure that any changes with pressy get compiled before the flatland example rebuilds

### Prompt 7

commit this

### Prompt 8

[Request interrupted by user]

### Prompt 9

On a full page load, we automatically scroll to the saved page location. This is good, but the animation on page load sucks. Maybe on a full page load we could change it to wait to show anything until after scroll, and then fade in?

### Prompt 10

Something broke with state pretty badly

### Prompt 11

[Request interrupted by user]

### Prompt 12

Something broke with state pretty badly. Now it doesn't properly restore scroll state or even chapter all the time.

### Prompt 13

[Request interrupted by user]

### Prompt 14

Something broke with state pretty badly. Now it doesn't properly restore scroll state or even chapter all the time. This logic seems to break frequently, and seems brittle. Maybe we should start by trying to simplify it. Are there effects that could be consolidated or removed? Is there any state that is redundant?

### Prompt 15

Okay, so here's the bug that remains:

1. This is in localStorage: `{"bookSlug":"flatland","chapterSlug":"concerning-the-inhabitants","page":1,"totalPages":1,"scrollPosition":0}`
2. I hard refresh the page. Local storage switches to `{"bookSlug":"flatland","chapterSlug":"concerning-the-inhabitants","page":0,"totalPages":1,"scrollPosition":0}`

So on hard refresh page load, something is forcing the page property back to 0, instead of sending the user to page 1.

