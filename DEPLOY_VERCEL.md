# Bharatvarsha — GitHub + Vercel deployment

## What is already configured

- Vite + React frontend builds with `npm run build`.
- Express backend is exported from `src/server.js` instead of starting a permanent server on Vercel.
- `api/[...path].js` exposes the Express app as a Vercel Node.js Function.
- `/tmp/heritage-uploads/` is used for temporary voice uploads because Vercel function storage is ephemeral.
- The React AI page uses `VITE_API_URL` locally and same-origin `/api/...` calls in production.
- `vercel.json` provides the React SPA fallback for routes such as `/about`, `/map`, and `/ai-guide`.

## Local test

```bash
npm install
npm run dev
```

In a second terminal:

```bash
npm run server
```

The frontend runs on Vite and the local API runs on port 5000.

## GitHub

1. Create a new empty GitHub repository.
2. Extract this ZIP.
3. Open a terminal inside the extracted `bharatvarsha-main` folder.
4. Run:

```bash
git init
git add .
git commit -m "Prepare Bharatvarsha for Vercel"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Do not commit `.env` or any API key.

## Vercel

1. Open Vercel and choose **Add New Project**.
2. Import the GitHub repository.
3. Keep the project Root Directory as `./`.
4. Let Vercel detect Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy once.
8. Open **Project Settings → Environment Variables**.
9. Add:

```text
GROQ_API_KEY = your_real_groq_key
```

Add it to Production (and Preview/Development if you want the AI to work in those environments too).

Do not add `VITE_API_URL` for the Vercel deployment. The production frontend automatically uses the same-domain `/api` routes.

After adding or changing environment variables, redeploy the project.

## Important URLs after deployment

```text
https://YOUR-PROJECT.vercel.app/
https://YOUR-PROJECT.vercel.app/about
https://YOUR-PROJECT.vercel.app/map
https://YOUR-PROJECT.vercel.app/ai-guide
https://YOUR-PROJECT.vercel.app/api/health
```

`/api/health` should return:

```json
{"status":"ok"}
```

## If the AI says the API failed

Check Vercel → Project → Deployments → latest deployment → Functions/Logs.

Then verify that `GROQ_API_KEY` exists in the correct environment and redeploy.

## If `/about`, `/map`, or `/ai-guide` gives 404 on refresh

Keep `vercel.json` in the repository root. It contains the SPA rewrite needed by React Router.
