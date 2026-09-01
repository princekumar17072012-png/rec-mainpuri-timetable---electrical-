# REC Mainpuri — Electrical Timetable

A phone-friendly, offline-capable Progressive Web App for **Rajkiya Engineering College, Mainpuri — Electrical Engineering — B.Tech First Year, I Semester (2026–27)**.

## Ready-to-deploy version
The files in this folder are the simplest version for a phone-only workflow:
- `index.html` — app shell
- `app.js` — timetable data + application logic
- `styles.css` — responsive UI
- `manifest.webmanifest` — Android install metadata
- `sw.js` — offline cache
- `campus.jpg` — supplied campus asset
- `icons/` — supplied logo-derived app icons
- `official-timetable.pdf` — supplied official source document

No npm, React build, backend, or laptop is required to deploy this version.

## Phone-only deployment
Use any static HTTPS host. GitHub Pages is one straightforward option: upload the contents of this folder to a repository, then enable Pages for the repository's branch/root. GitHub Pages serves static files and requires an `index.html` entry file.

After the HTTPS URL is live in Chrome on Android:
1. Open the URL.
2. Wait for the app to load once while online so the service worker can cache the app shell.
3. Use Chrome's install/Add to Home screen option, or use the app's install button.
4. Open the new **REC Timetable** icon from the Android home screen.

## Offline behavior
The timetable is stored entirely in the app. The service worker caches the app shell and supplied assets. Once the app has loaded successfully online, the core timetable can open without a network connection.

## Notification limitation
The app requests browser notification permission and stores a reminder preference. Browser/PWA background scheduling is platform-dependent, so the app does **not** claim guaranteed alarms when Chrome is fully stopped.

## Data source
The official uploaded timetable is the source of truth for the timetable. The UI preserves group labels, Library, Lunch, Sports & Yoga, T-marked sessions, and Saturday's Institutional / Department / Incubational Activity.

Festival/special-day dates are kept separately in `app.js` and should be treated as calendar information, not official REC holiday declarations.
