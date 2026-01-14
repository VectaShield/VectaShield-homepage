# VectaShield Deployment Checklist

Quick checklist for setting up automated deployment using a single repository with `deploy` branch.

## Setup Checklist

- [ ] **Create Deploy Branch**
  - [ ] Run: `git checkout --orphan deploy`
  - [ ] Run: `git rm -rf .`
  - [ ] Create README: `echo "# Deploy Branch" > README.md`
  - [ ] Commit: `git add README.md && git commit -m "Initialize deploy branch"`
  - [ ] Push: `git push origin deploy`
  - [ ] Switch back: `git checkout main`

- [ ] **Verify Workflow Configuration**
  - [ ] Check `.github/workflows/build.yaml` exists
  - [ ] Verify deploy branch is correct (line 54: `ref: deploy`)
  - [ ] Confirm Docker build file exists: `src/ci/build.dockerfile`

- [ ] **Enable Workflow Permissions** (if needed)
  - [ ] Go to Settings → Actions → General → Workflow permissions
  - [ ] Select "Read and write permissions"
  - [ ] Click "Save"

- [ ] **Test the Workflow**
  - [ ] Make a commit and push to main branch
  - [ ] Check Actions tab for workflow run
  - [ ] Verify success (green checkmark)
  - [ ] Check `deploy` branch for built files (index.html, assets/, etc.)

- [ ] **Configure Hostinger**
  - [ ] Connect this repository: `VectaShield-homepage`
  - [ ] **Important:** Set branch to `deploy` (not `main`)
  - [ ] Set deployment path to root directory
  - [ ] Enable automatic deployments on push to `deploy` branch
  - [ ] Test first deployment

- [ ] **Verify Live Site**
  - [ ] Visit https://vectashield.com
  - [ ] Check all pages load correctly
  - [ ] Test all links and navigation
  - [ ] Verify images and assets load

## Post-Deployment

- [ ] Set up custom domain (if not already configured)
- [ ] Configure SSL certificate on Hostinger
- [ ] Set up analytics tracking (Google Analytics, etc.)
- [ ] Test contact form functionality
- [ ] Create social media accounts
- [ ] Update social media links when accounts are active
- [ ] Set up monitoring/uptime checks

## Quick Command Reference

```bash
# Create deploy branch (first time only)
git checkout --orphan deploy
git rm -rf .
echo "# Deploy Branch" > README.md
git add README.md
git commit -m "Initialize deploy branch"
git push origin deploy
git checkout main

# Test deployment by pushing to main
git add .
git commit -m "Deploy update"
git push origin main

# Check deploy branch locally
git checkout deploy
git pull origin deploy
ls -la  # View built files

# Switch back to main
git checkout main

# View deployment history
git log deploy --oneline
```

## Important URLs

- **Repository:** `https://github.com/[username]/VectaShield-homepage`
- **Main Branch (source):** `https://github.com/[username]/VectaShield-homepage/tree/main`
- **Deploy Branch (built):** `https://github.com/[username]/VectaShield-homepage/tree/deploy`
- **GitHub Actions:** `https://github.com/[username]/VectaShield-homepage/actions`
- **Live Site:** `https://vectashield.com`

## Branch Overview

| Branch | Purpose | Contents |
|--------|---------|----------|
| `main` | Source code | React components, configs, docs |
| `deploy` | Built files | Compiled HTML, JS, CSS, assets |

## Troubleshooting Quick Fixes

**Workflow fails with "ref not found":**
```bash
# Create the deploy branch first
git checkout --orphan deploy
git rm -rf .
echo "# Deploy Branch" > README.md
git add README.md
git commit -m "Initialize deploy branch"
git push origin deploy
git checkout main
```

**Site not updating:**
- Check Hostinger is pulling from `deploy` branch (not `main`)
- Verify workflow completed successfully (green checkmark)
- Check Hostinger deployment logs

**Permission denied:**
- Go to Settings → Actions → General → Workflow permissions
- Enable "Read and write permissions"

## Benefits of This Setup

✅ No external repositories needed
✅ No Personal Access Tokens required
✅ Uses GitHub's built-in authentication
✅ Simple single-repo deployment
✅ Clear separation: `main` = source, `deploy` = built files

## Need Help?

See [DEPLOYMENT_SETUP.md](DEPLOYMENT_SETUP.md) for detailed instructions and troubleshooting.
