# VectaShield Deployment Setup Guide

This guide walks you through setting up the automated deployment pipeline for VectaShield.com.

## Overview

The deployment workflow automatically:
1. Builds your React/Vite app using Docker when you push to `main` branch
2. Pushes the compiled `dist` folder to a `deploy` branch in the same repository
3. Your hosting provider (Hostinger) pulls from the `deploy` branch

**This is a simple, single-repository deployment** - no external repos or personal access tokens needed!

## Prerequisites

- GitHub account with this repository
- Hostinger hosting account (or similar)
- Git installed locally

## Step-by-Step Setup

### 1. Create the Deploy Branch

First, we need to create an orphan `deploy` branch (a branch with no history):

```bash
# Create and switch to a new orphan branch called deploy
git checkout --orphan deploy

# Remove all files from staging
git rm -rf .

# Create a placeholder README
echo "# Deploy Branch" > README.md
echo "This branch contains the built/compiled version of VectaShield.com" >> README.md

# Commit and push
git add README.md
git commit -m "Initialize deploy branch"
git push origin deploy

# Switch back to main branch
git checkout main
```

**That's it!** The branch is now ready for automated deployments.

### 2. Test the Workflow

Your workflow is now configured! Test it:

```bash
# Make any change and commit to main branch
git add .
git commit -m "Test deployment workflow"
git push origin main
```

Watch the workflow:
1. Go to your repo → Actions tab
2. You should see "Build and Deploy with Docker" running
3. Once complete (green checkmark), check your `deploy` branch
4. You should see all your built files (index.html, assets/, etc.)

### 3. Configure Hostinger to Pull from Deploy Branch

#### Option A: Using Git Deployment (Recommended)

1. Log into Hostinger control panel
2. Go to Git section or Website settings → Git
3. Connect this repository: `VectaShield-homepage`
4. **Important:** Set the branch to `deploy` (not `main`)
5. Set deployment path to root (or leave default)
6. Enable automatic deployments on push to `deploy` branch

#### Option B: Manual FTP/SFTP (Alternative)

1. Clone the deploy branch locally:
   ```bash
   git clone -b deploy https://github.com/[your-username]/VectaShield-homepage.git vectashield-deploy
   cd vectashield-deploy
   ```
2. Upload all files via FTP to Hostinger's `public_html` directory

### 4. Verify Your Deployment

1. Visit `https://vectashield.com`
2. Your site should be live!
3. Every push to `main` branch will automatically rebuild and deploy

## How It Works

### Workflow Breakdown

```yaml
# Triggered on push to main branch
on:
  push:
    branches:
      - main

# Job 1: Build
# - Checks out code from main branch
# - Builds Docker image using src/ci/build.dockerfile
# - Extracts compiled dist folder
# - Uploads as artifact

# Job 2: Deploy
# - Downloads build artifact
# - Checks out deploy branch
# - Replaces all files with new build
# - Commits and pushes to deploy branch
```

### Branch Structure

```
main branch (source code)
├── src/
├── .github/
├── README.md
└── ... (all source files)

deploy branch (built files only)
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── images/
└── svg/
```

### Workflow Diagram

```
┌─────────────────────┐
│  Push to main       │
│  (source code)      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  GitHub Actions     │
│  1. Build with      │
│     Docker          │
│  2. Extract dist/   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Push to deploy     │
│  branch             │
│  (built files)      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Hostinger pulls    │
│  from deploy branch │
│  and serves site    │
└─────────────────────┘
```

## Troubleshooting

### Workflow Fails on First Run
If the workflow fails because the `deploy` branch doesn't exist:
- Follow Step 1 above to create the deploy branch
- Re-run the failed workflow from the Actions tab

### Build Fails
- Check Docker build logs in Actions tab
- Verify `src/ci/build.dockerfile` exists
- Ensure `package.json` has a valid `build` script
- Check for syntax errors in your source code

### Deploy Branch is Empty or Outdated
- Check if the workflow completed successfully (green checkmark in Actions tab)
- Verify the deploy job ran after the build job
- Check workflow logs for errors in the "Commit to deploy branch" step
- Try manually triggering the workflow by pushing to main

### Site Not Updating on Hostinger
- Ensure Hostinger is pulling from the `deploy` branch (not `main`)
- Check if Hostinger has automatic deployment enabled
- Verify webhook is configured correctly
- Try manually pulling changes on Hostinger
- Check Hostinger logs for deployment errors

### Permission Denied Errors
This setup uses the built-in `GITHUB_TOKEN`, so you shouldn't encounter permission errors. If you do:
- Verify your repository settings allow GitHub Actions to create and push to branches
- Go to Settings → Actions → General → Workflow permissions
- Ensure "Read and write permissions" is selected

## Updating the Workflow

The workflow file is located at:
- `.github/workflows/build.yaml`

Key configuration points:
- **Deploy branch:** Line 54 - `ref: deploy`
- **Build dockerfile:** Line 24 - `docker build -t my-vite-app -f src/ci/build.dockerfile src/`
- **Trigger branch:** Line 6 - `branches: [main]`

## Advanced Configuration

### Deploying to a Subdirectory

If Hostinger requires files in a subdirectory, modify the workflow:

```yaml
# In the deploy job, add:
mkdir -p subdirectory
cp -r ../dist/* subdirectory/
```

### Adding Environment Variables

Add build-time environment variables:

```yaml
# In the build job, before building:
- name: Create .env file
  run: |
    echo "VITE_API_URL=${{ secrets.API_URL }}" > src/.env
```

### Excluding Files from Deployment

Create a `.deployignore` file and modify the workflow to respect it.

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [Hostinger Git Deployment Guide](https://support.hostinger.com/en/articles/5617420-how-to-deploy-a-github-repository-to-hostinger)
- [GitHub Actions GITHUB_TOKEN](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)

## Benefits of This Approach

✅ **Simple** - No external repositories to manage
✅ **Secure** - Uses built-in GITHUB_TOKEN, no PAT required
✅ **Clean** - Source and built files separated by branches
✅ **Automatic** - Deploys on every push to main
✅ **Trackable** - Full deployment history in deploy branch

## Questions?

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Review the troubleshooting section above
3. Ensure the deploy branch exists and is accessible
4. Verify Hostinger is configured to pull from the `deploy` branch

---

Last Updated: 2026-01-13
