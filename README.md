# Chong-An Ying — Portfolio

Personal portfolio site. Deployed via GitHub Pages.

## How to add a new project

Open `app.js` and add an object to the `projects` array. Each object has: title, category ("n8n"|"data"|"agent"), description, year (shown on live cards only), tags (array), status ("live"|"wip"|"planned"), statusLabel (null for live; e.g. "進行中" or "規劃中"), note (shown below description if not null), link (URL or null).

## Deployment

Push to `main` on GitHub. In repo Settings → Pages → Source: Deploy from branch `main`, folder `/` (root).

## Resume

Replace `assets/resume.pdf` with your actual PDF. Filename must match exactly.
