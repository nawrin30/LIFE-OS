# LifeOS RPG — Level Up Your Life

A local-first, gamified productivity dashboard that turns real-world goals into quests, XP, levels, skill unlocks, achievements, and reflections.

**Tagline:** “Level Up Your Life. One Quest at a Time.”

## Features
- Responsive dark RPG-inspired dashboard with optional light theme
- Quest creation, editing, deletion, search, filters, sorting and one-time XP rewards
- Level and rank progression, level-up feedback, and daily activity streaks
- Interactive SVG skill tree with level, XP and prerequisite requirements
- Automatically evaluated achievements
- Analytics with weekly activity charts, category progress and monthly activity calendar
- Private journal with search, editing, mood and date fields
- Profile customization, daily goal, reduced motion and sound preference
- Versioned LocalStorage persistence and JSON import/export
- Reset confirmation, accessible controls, responsive layouts and toast feedback

## Technology
- HTML5, CSS3, Vanilla JavaScript (ES6+)
- LocalStorage for browser-local persistence
- Inline SVG for the skill tree and progress ring
- Chart.js via CDN for charts (the rest of the application remains usable if the chart CDN is unavailable)

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a modern browser, or open the folder in VS Code and use Live Server.
3. No Node.js, build step, package manager, account, or backend is required.

## Folder structure
```text
lifeos-rpg/
├── index.html
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── storage.js
│   ├── quests.js
│   ├── progression.js
│   ├── skill-tree.js
│   ├── achievements.js
│   ├── streaks.js
│   ├── analytics.js
│   ├── journal.js
│   └── settings.js
├── assets/
│   └── icons/
└── README.md
```

## Data and privacy
Application data is saved in this browser's LocalStorage. Journal entries are not sent to an application backend or transmitted by the app. LocalStorage is not encrypted or a secure vault; anyone with access to the same browser profile may be able to access the data. Clearing site/browser data can erase progress. Export a JSON backup periodically.

Importing a backup replaces current data and accepts the supported schema version only. Resetting progress requires confirmation.

## Progression rules
- Completing an active quest grants its configured XP once. A completed quest cannot be completed again.
- Level 1 begins at 0 XP. The first level requires 100 XP; each subsequent level requirement increases by 50 XP.
- A productive day is a local calendar day on which at least one quest is completed. Streaks count consecutive productive days.
- Skill unlocks require the specified player level, total XP threshold and all prerequisite skills.
- Achievements are granted once when their conditions are met.

## Limitations
- This is a single-browser, single-profile app; it does not sync across devices.
- LocalStorage data is not encrypted.
- Chart.js and web fonts are loaded from CDNs, so charts/typography may fall back when offline.
- Daily/weekly quest labels are organizational: recurring quest templates are not automatically cloned into a new day/week.

## Screenshots
Add screenshots of the dashboard, quest board, skill tree, analytics and journal here after running the app.

## Future improvements
- Optional installable PWA and offline-first asset caching
- More skill branches and configurable achievement definitions
- Automated browser tests and accessibility audit
- Optional encrypted export files
