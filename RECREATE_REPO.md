# Recreate VectaShield-homepage as Non-Forked Repository

This guide will help you recreate the repository without the fork relationship, which will enable workflow permissions.

## Quick Overview

1. Create new empty repo on GitHub
2. Push current code to new repo
3. Create deploy branch
4. Delete old repo and rename new one (optional)
5. Test workflow

## Step-by-Step Instructions

### Step 1: Create New Repository on GitHub

1. Go to https://github.com/organizations/VectaShield/repositories/new
2. Repository name: `VectaShield-homepage-new` (temporary name)
3. Description: `VectaShield homepage - fresh repository`
4. Visibility: **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Push Code to New Repository

Open a terminal in this directory and run these commands:

```bash
# Add the new repository as a remote
git remote add new-origin https://github.com/VectaShield/VectaShield-homepage-new.git

# Push main branch to new repo
git push new-origin main

# Verify it worked
git ls-remote new-origin
```

### Step 3: Create Deploy Branch in New Repository

```bash
# Create and push an orphan deploy branch
git checkout --orphan deploy-temp
git rm -rf .
echo "# Deploy Branch" > README.md
git add README.md
git commit -m "Initialize deploy branch"
git push new-origin deploy-temp:deploy

# Switch back to main
git checkout main
git branch -D deploy-temp
```

### Step 4: Update Your Local Repository

```bash
# Remove old origin
git remote remove origin

# Rename new-origin to origin
git remote rename new-origin origin

# Set upstream for main branch
git branch --set-upstream-to=origin/main main

# Verify remotes
git remote -v
```

### Step 5: Delete Old Repository and Rename New One

1. Go to https://github.com/VectaShield/VectaShield-homepage/settings
2. Scroll to bottom → "Danger Zone" → "Delete this repository"
3. Type the repository name to confirm deletion
4. Click "I understand the consequences, delete this repository"

5. Go to https://github.com/VectaShield/VectaShield-homepage-new/settings
6. In "Repository name" field, change to: `VectaShield-homepage`
7. Click "Rename"

### Step 6: Update Local Remote URL

```bash
# Update the remote URL to match the renamed repo
git remote set-url origin https://github.com/VectaShield/VectaShield-homepage.git

# Verify
git remote -v
```

### Step 7: Enable Workflow Permissions

1. Go to https://github.com/VectaShield/VectaShield-homepage/settings/actions
2. Under "Workflow permissions"
3. Select "Read and write permissions" (should NOT be grayed out now)
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Click "Save"

### Step 8: Test Deployment

```bash
# Make a small test change
echo "" >> README.md
git add README.md
git commit -m "Test automated deployment"
git push origin main
```

Then check:
1. Go to https://github.com/VectaShield/VectaShield-homepage/actions
2. Watch the workflow run
3. Verify it completes successfully (green checkmark)
4. Check the deploy branch for built files

### Step 9: Configure Hostinger

1. Log into Hostinger
2. Go to your website settings
3. Connect to GitHub repository: `VectaShield/VectaShield-homepage`
4. **Important**: Set branch to `deploy` (not `main`)
5. Set deployment path to root directory
6. Enable automatic deployments
7. Trigger first deployment

## Alternative: Quick Script

If you want to run everything at once (except GitHub web UI steps), save this as `recreate.sh`:

```bash
#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Step 1: Please create new repo on GitHub${NC}"
echo "Go to: https://github.com/organizations/VectaShield/repositories/new"
echo "Name: VectaShield-homepage-new"
echo "Do NOT initialize with any files"
read -p "Press enter when done..."

echo -e "${GREEN}Step 2: Adding new remote and pushing main branch${NC}"
git remote add new-origin https://github.com/VectaShield/VectaShield-homepage-new.git
git push new-origin main

echo -e "${GREEN}Step 3: Creating deploy branch${NC}"
git checkout --orphan deploy-temp
git rm -rf .
echo "# Deploy Branch" > README.md
git add README.md
git commit -m "Initialize deploy branch"
git push new-origin deploy-temp:deploy
git checkout main
git branch -D deploy-temp

echo -e "${GREEN}Step 4: Updating local repository${NC}"
git remote remove origin
git remote rename new-origin origin
git branch --set-upstream-to=origin/main main

echo -e "${YELLOW}Step 5: Delete old repo and rename new one${NC}"
echo "1. Delete: https://github.com/VectaShield/VectaShield-homepage/settings"
echo "2. Rename: https://github.com/VectaShield/VectaShield-homepage-new/settings"
echo "   Rename to: VectaShield-homepage"
read -p "Press enter when done..."

echo -e "${GREEN}Step 6: Updating remote URL${NC}"
git remote set-url origin https://github.com/VectaShield/VectaShield-homepage.git

echo -e "${GREEN}Step 7: Enable workflow permissions${NC}"
echo "Go to: https://github.com/VectaShield/VectaShield-homepage/settings/actions"
echo "Select: Read and write permissions"
read -p "Press enter when done..."

echo -e "${GREEN}Step 8: Testing deployment${NC}"
echo "" >> README.md
git add README.md
git commit -m "Test automated deployment"
git push origin main

echo -e "${GREEN}Done! Check Actions tab for workflow status${NC}"
echo "https://github.com/VectaShield/VectaShield-homepage/actions"
```

## Troubleshooting

**If push fails with authentication error:**
```bash
# You may need to authenticate with GitHub
# Option 1: Use GitHub CLI
gh auth login

# Option 2: Use SSH instead of HTTPS
git remote set-url origin git@github.com:VectaShield/VectaShield-homepage-new.git
```

**If deploy branch already exists in new repo:**
```bash
# Delete it first
git push new-origin --delete deploy
# Then recreate it
```

**If workflow still fails:**
- Double-check workflow permissions are enabled
- Verify deploy branch exists
- Check Actions tab for detailed error messages

## Benefits of This Approach

✅ Removes fork relationship completely
✅ Enables full workflow permissions
✅ Keeps all commit history on main branch
✅ Clean deploy branch
✅ Same repository structure as before

## Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Verify each step was completed
3. Check GitHub Actions logs for details
