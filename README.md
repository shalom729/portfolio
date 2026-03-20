# Chong-An Ying — Portfolio

Personal portfolio site. Deployed via GitHub Pages.

## How to add a new project

Open `app.js` and add an object to the `projects` array:

```js
{
  title: "Project Name",
  category: "n8n",        // "n8n" | "data" | "agent"
  description: "One or two sentence description.",
  year: 2026,             // shown on live cards only
  tags: ["Tag1", "Tag2"],
  status: "live",         // "live" | "wip" | "planned"
  statusLabel: null,      // null for live; e.g. "進行中" or "規劃中"
  note: null,             // shown below description if not null
  link: null              // URL or null
}
```

## Deployment

Push to `main` on GitHub. In repo Settings → Pages → Source: Deploy from branch `main`, folder `/` (root).

## Resume

Replace `assets/resume.pdf` with your actual PDF. Filename must match exactly.
