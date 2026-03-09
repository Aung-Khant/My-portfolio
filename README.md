# Aung Min Khant — Portfolio

**[aungminkhant.com](https://aungminkhant.com)** · Computer Science student, curious builder, lifelong learner.

Personal portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion** — dark/light theme, magnetic-field background, and smooth animations.

---

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

## Build

```bash
npm run build
```

Output is in `dist/`. The GitHub Action deploys it to the `gh-pages` branch on push to `main`.

---

## Deploy & connect to aungminkhant.com

### 1. Deploy the site

Push to `main` (or run the **Deploy to GitHub Pages** workflow from the **Actions** tab). The workflow builds the app and publishes `dist/` to the `gh-pages` branch.

### 2. Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → **Source:** Deploy from a branch
3. **Branch:** `gh-pages` → **/ (root)** → **Save**

### 3. Add custom domain and verify

1. In **Settings** → **Pages**, under **Custom domain**, enter `aungminkhant.com` and **Save**
2. GitHub will ask for a **DNS TXT record**:
   - **TXT host:** `_github-pages-challenge-Aung-Khant`
   - **TXT value:** the code GitHub shows (e.g. `1a66d096c3c376797928f189fb0dd4`)
3. Add that TXT record at your DNS provider, wait for propagation (up to 24 hours), then click **Verify** on GitHub
4. Optionally enable **Enforce HTTPS**

### DNS records (for reference)

| Type  | Host  | Value                   |
|-------|-------|-------------------------|
| A     | `@`   | `185.199.108.153`       |
| A     | `@`   | `185.199.109.153`       |
| A     | `@`   | `185.199.110.153`       |
| A     | `@`   | `185.199.111.153`       |
| CNAME | `www` | `Aung-Khant.github.io`  |

The repo’s `public/CNAME` contains `aungminkhant.com`, so each deploy keeps the custom domain set.
