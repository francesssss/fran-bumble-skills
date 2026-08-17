# CX / QA Operations Grid

A daily launchpad for my recurring CX/QA responsibilities, grouped by cadence
(Daily, Weekly, End-of-Week, Bi-weekly, Meeting). Tick tasks as I work through
them, reset for a fresh day, and jump straight to the Slack channels each task
needs. Same setup as the skills roadmap: plain HTML/CSS/JS, no build step.

## Run it

Open `index.html` in a browser.

## Host it on GitHub Pages

Upload the 4 files (`index.html`, `style.css`, `data.js`, `app.js`) to a repo —
either a new one, or a subfolder of an existing repo — then in
**Settings → Pages** set Source to `Deploy from a branch`, branch `main`,
folder `/ (root)`. Live at `https://YOUR_USERNAME.github.io/REPO/`.

> If you put it in a **subfolder** of a repo that's already serving another
> Pages site, the URL becomes `.../REPO/subfolder/` and you don't need to touch
> Pages settings again.

## Edit the content

Everything lives in **`data.js`**:

- Each `card` is one cadence bucket. Change `cadence`, `time`, `title`, `accent`
  (`"teal"`, `"gold"`, or `"muted"`), its `tasks`, and its `links`.
- Each task needs a unique `id` (used to remember its checked state).
- `quickLinks` at the top are the chips under the header.

## Note on checkboxes

Ticks are saved in the browser's `localStorage` and persist until you hit
**Reset for new day**. They do NOT reset automatically — that's deliberate, so
a page refresh mid-morning doesn't wipe your progress. Just click reset when you
start a new day.
