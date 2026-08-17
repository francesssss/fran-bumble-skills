# Ownership Skills Map

A reference map of the operational areas I own and the skills I need to build
under each one — with open-access resources to learn from. Same format as the
AI Strategist Roadmap: click a skill to see a description, mark where you're at
(Not started / Building / Confident), and open resource links.

## Run it

Open `index.html` in a browser.

## Host on GitHub Pages

Upload the 4 files (`index.html`, `style.css`, `data.js`, `app.js`) to a repo,
then **Settings → Pages** → Source: `Deploy from a branch`, branch `main`,
folder `/ (root)`.

Or drop them in a **subfolder** of your existing `ai-skills-roadmap` repo (e.g.
`ownership/`) and it's live at
`https://YOUR_USERNAME.github.io/ai-skills-roadmap/ownership/` with no extra
setup.

## Edit the content

Everything is in **`data.js`**. Each `section` is an ownership area:

- `title` — the area name
- `ownership` — your role badge (e.g. "Primary owner", "2nd owner · under Karol")
- `blurb` — one-line summary
- `nodes` — the skills, each with a unique `id`, `title`, `level`
  (`"core"` | `"advanced"` | `"optional"`), `description`, and `resources`.

To add a resource to a skill:

```js
resources: [
  { label: "SQLZoo", url: "https://sqlzoo.net" }
]
```

Several skills have empty resource lists on purpose — those are areas where the
best learning is internal/on-the-job or where you'll want to pick your own
source. Add links as you find them.

## Privacy note

This references internal channels and team names. If you host it on a **public**
repo, anyone can read those. Nothing sensitive is in it now, but if you add real
metrics or case detail later, use a **private** repo or keep it local.
