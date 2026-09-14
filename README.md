# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Integrated setup

The Home page, India map, Heritage AI and About page are integrated in one React app.

Local:
- `npm install`
- create `.env` with `GROQ_API_KEY=...`
- terminal 1: `npm run server`
- terminal 2: `npm run dev`

For deployment, set `VITE_API_URL` to the deployed Node/Express backend URL before building.

Routes:
- `/` Home + India map section
- `/map` India map
- `/ai-guide` Heritage AI
- `/about` About Bharat


## Vercel deployment

This repository is configured for a single Vercel project containing the Vite React frontend and Express API. The API is exposed through `api/[...path].js`, while the normal Express server remains available for local development.

1. Add `GROQ_API_KEY` in Vercel Project Settings → Environment Variables.
2. Leave `VITE_API_URL` unset in Vercel; the frontend will call `/api/...` on the same domain.
3. Import the GitHub repository into Vercel and use the detected Vite build settings.
4. Build command: `npm run build`. Output directory: `dist`.

Do not commit `.env` or your Groq API key.
