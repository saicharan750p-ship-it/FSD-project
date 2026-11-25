# PlatePilot — Eat well. Spend smart.

PlatePilot is a responsive student-focused meal planning mini-project. It helps college students and hostel residents explore affordable Indian meals, generate a weekly plan, review estimated nutrition, and prepare a shopping checklist.

## Features

- Responsive landing page and six linked pages.
- Meal planner with daily budget, vegetarian / vegan / non-vegetarian preference, fitness goal, meal count and ingredient exclusions.
- Weekly plan generation with a simple protein-per-rupee / budget-aware selection heuristic.
- Dashboard with estimated spend, protein and calorie comparison.
- Recipe catalogue loaded from `data/recipes.json`, with search and diet filters.
- Shopping list generated from the saved plan, with checkboxes, custom items and print support.
- Community tip board with likes.
- Browser persistence through `localStorage`.
- Print-friendly pages; use the browser's **Save as PDF** destination for PDF export.
- Express server with health and recipe API endpoints.

## Requirements

- Node.js 18+ and npm.
- A modern browser.

## Run in VS Code

1. Extract the `PlatePilot` folder.
2. Open the folder in Visual Studio Code.
3. Open Terminal → New Terminal.
4. Run `npm install`.
5. Run `npm start`.
6. Visit `http://localhost:3000`.

For auto-restart during development, run `npm run dev` (Node.js watch mode).

### Run without Node

You can open `index.html` directly for the static pages. For recipe fetching, use the Express server or another local static server because browsers may block `fetch()` from a `file://` URL.

## API

- `GET /api/health` — server health check.
- `GET /api/recipes` — recipe catalogue JSON.

## Project structure

```text
PlatePilot/
├── index.html
├── planner.html
├── dashboard.html
├── shopping.html
├── recipes.html
├── community.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── app.js
│   ├── planner.js
│   ├── optimizer.js
│   ├── dashboard.js
│   ├── shopping.js
│   ├── recipes.js
│   └── storage.js
├── data/
│   └── recipes.json
├── server/
│   └── server.js
├── assets/
│   └── images/
├── package.json
└── README.md
```

## Notes and limitations

- Food prices and nutrition values are illustrative estimates, not live market data or clinical nutrition guidance. Actual costs vary by city, season, brand and portion.
- The optimizer is a transparent demo heuristic, not a medical or dietetic recommendation engine.
- Plans, community posts, likes and shopping checks are stored locally in the current browser. There is no account system or shared online community backend.
- The visual food artwork uses emoji/CSS illustration so the project works without external image assets.

## Customization

Edit `data/recipes.json` to add recipes. Each recipe has `id`, `name`, `emoji`, `diet`, `cost`, `calories`, `protein`, `time`, `category`, `ingredients`, and `description`.
