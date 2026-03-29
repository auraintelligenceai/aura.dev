# Deployment Guide for Pixel Portfolio

This document provides detailed instructions for deploying the Pixel Portfolio application to various platforms.

---

## Pre-Deployment Checklist

- [ ] All code is committed and pushed to the repository
- [ ] `npm run build` completes without errors
- [ ] No console errors or warnings in development
- [ ] All images and assets are optimized
- [ ] Environment variables are properly configured
- [ ] SEO metadata is complete in `index.html`

---

## Option 1: Vercel (Recommended)

Vercel is the optimal choice for Vite + React applications with automatic CI/CD.

### Quick Deploy

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Monitor deployment:**
   - Check [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - View logs and analytics in real-time

### With GitHub Integration

1. Push your repository to GitHub
2. Visit [https://vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-deploys on every push to `main`

**Configuration:** `vercel.json` is pre-configured with:
- Optimized build settings
- Security headers
- Cache policies for assets
- SPA routing rewrites

---

## Option 2: Netlify

### Using Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Using GitHub Integration

1. Connect your GitHub repository at [https://app.netlify.com](https://app.netlify.com)
2. Netlify auto-builds and deploys on push
3. Uses existing `netlify.toml` configuration

**Pre-configured settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20
- Security headers enabled
- Asset caching optimized

---

## Option 3: GitHub Pages

For static hosting directly from GitHub:

```bash
# Build the project
npm run build

# Deploy dist folder to gh-pages branch
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

Then enable GitHub Pages in repository settings:
- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/(root)`

---

## Option 4: Docker Deployment

For containerized deployments:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and push:
```bash
docker build -t pixel-portfolio .
docker tag pixel-portfolio your-registry/pixel-portfolio:latest
docker push your-registry/pixel-portfolio:latest
```

---

## Performance Optimization

The build is optimized for production:

- **Code Splitting:** Vendor and icon libraries are split into separate chunks
- **Minification:** JavaScript and CSS are minified using Terser
- **Asset Hashing:** Files include content hashes for cache busting
- **No Source Maps:** Production builds exclude source maps for smaller size
- **CSS Code Split:** Each page gets only necessary CSS

### Bundle Analysis

Check bundle size:
```bash
npm run build
# Output shows gzipped sizes in console
```

Expected output:
- Total: ~180 KB (production bundle)
- HTML: ~2 KB
- JavaScript: ~160 KB (after gzip: ~50 KB)
- CSS: ~18 KB (after gzip: ~3 KB)

---

## Environment Variables

**Production:**
- `NODE_ENV=production` (auto-set by deployment platforms)
- `VITE_ENV=production`
- `VITE_APP_NAME=Pixel Portfolio`

No sensitive environment variables are required for this static application.

---

## Monitoring & Maintenance

### Post-Deployment

1. Test the live URL thoroughly
2. Check all links and navigation
3. Verify responsive design on mobile devices
4. Test form submissions (if applicable)
5. Check performance with Lighthouse

### Analytics

- Vercel: Built-in analytics dashboard
- Netlify: Analytics included with custom domain
- GitHub Pages: Use Google Analytics via script injection

### Cache Invalidation

- **HTML Files:** 1-hour cache (must-revalidate)
- **Assets (JS/CSS):** 1-year cache (immutable hash)
- **Images:** Follow Tailwind/browser cache rules

---

## Troubleshooting

### Build Errors

```bash
# Clear build cache
rm -rf node_modules dist
npm ci
npm run build
```

### TypeScript Errors

```bash
# Type check
npx tsc --noEmit
```

### Deployment Fails

1. Check build output for errors
2. Verify all dependencies are installed
3. Ensure Node version matches (20+)
4. Check environment variables
5. Review deployment logs on platform dashboard

---

## Security Headers

All deployments include security headers:

| Header | Value |
|--------|-------|
| X-Frame-Options | DENY |
| X-Content-Type-Options | nosniff |
| X-XSS-Protection | 1; mode=block |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | No geolocation, microphone, camera |

---

## Custom Domain Setup

### For Vercel
1. Go to Project Settings → Domains
2. Add custom domain
3. Update DNS records at your registrar

### For Netlify
1. Domain Settings → Custom domains
2. Add domain
3. Update DNS (Netlify provides instructions)

### For GitHub Pages
1. Repository Settings → Pages
2. Custom domain field
3. Create CNAME file in `dist/` directory

---

## Need Help?

- **Vercel Support:** [https://vercel.com/help](https://vercel.com/help)
- **Netlify Support:** [https://www.netlify.com/support/](https://www.netlify.com/support/)
- **GitHub Pages:** [https://docs.github.com/en/pages](https://docs.github.com/en/pages)

---

**Last Updated:** 2026-03-29
**Status:** Production Ready
