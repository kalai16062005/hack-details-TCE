# CODEASTHRAM Challenge

This repository contains the frontend for the CODEASTHRAM Challenge event website, presented in collaboration with Thiagarajar College of Engineering (TCE), Madurai, and Tarcin. It is a single-page React application that introduces the event and presents its schedule, evaluation criteria, participating teams, judges, department information, and video highlights.

## Features

- Responsive navigation with links to page sections.
- Animated event hero and event information.
- Event overview, team rankings, and departmental information.
- Interactive event timeline and evaluation-criteria cards.
- Judge profiles and a video gallery with a playback modal.
- Locally bundled images and video assets, including a looping background video.
- Smooth scrolling and a scroll-to-top control.

The page content is implemented in frontend components and local data files. This project does not include a server, API, database, registration flow, or authentication.

## Technology

- React 19 and JavaScript (ES modules, JSX)
- Vite 7 for local development and production builds
- Tailwind CSS 4, PostCSS, and Autoprefixer for styling
- Framer Motion for animations
- Lucide React and React Icons for icons

## Project structure

```text
.
├── public/                 # Public assets served from the site root (gallery, videos, logo)
├── src/
│   ├── assets/             # Images and other imported assets
│   ├── components/         # Page sections and reusable UI components
│   ├── constants/          # Event and team display data
│   ├── pages/              # Page-level components
│   ├── App.jsx             # Main page composition
│   ├── App.css
│   ├── index.css
│   └── main.jsx            # React application entry point
├── index.html
├── package.json
└── vite.config.js
```

The active application is assembled in `src/App.jsx`. It renders the navigation and event sections, with section content implemented under `src/components/`. Images imported from `src/assets/` are handled by Vite; files in `public/` are referenced by root-relative paths.

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm (the repository includes `package-lock.json`)

## Installation

From the repository root, install the locked dependencies:

```sh
npm ci
```

## Run locally

Start the Vite development server:

```sh
npm run dev
```

Vite prints the local URL in the terminal. Open that URL in a browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create the production site in `dist/`. |
| `npm run preview` | Serve the production build locally for inspection. Run `npm run build` first. |
| `npm run lint` | Run ESLint across the repository. |

There is no test script or automated test suite configured in `package.json`.

## Configuration

No environment variables are required by the current application. It does not make API requests or contain backend configuration.

## Production build and deployment

Build the static site with:

```sh
npm run build
```

The generated site is written to `dist/`. Deploy the contents of that directory to a static hosting provider configured to serve `index.html` as the site entry point. To inspect the build locally, run `npm run preview`.
