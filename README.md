# VectaShield.com Website

Official homepage for VectaShield - Powering The Future through engineering excellence in the era of Artificial Intelligence.

## About
VectaShield is a technology company specializing in AI solutions, application development, digital transformation, systems integration, product prototyping, and cloud engineering. This website serves as our professional landing page and central hub for connecting with clients, partners, and the tech community.

## Tech Stack
Built by AI-powered engineers, this site leverages:
- React - Component-based UI framework
- Vite - Next-generation frontend tooling
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Animation library
- Docker - Containerization
- GitHub Actions - CI/CD pipeline
- Hostinger - Web hosting

## Social Media & Contact

### Connect With Us
- **Website**: [https://vectashield.com](https://vectashield.com)
- **Email**: [contact@vectashield.com](mailto:contact@vectashield.com)
- **Instagram**: [@vectashield_llc](https://www.instagram.com/vectashield_llc)
- **LinkedIn**: [company/vectashield](https://www.linkedin.com/company/vectashield)
- **GitHub**: [VectaShield](https://github.com/VectaShield)

## Development

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

This project uses automated GitHub Actions deployment with a `deploy` branch. See the deployment documentation:

- **[DEPLOYMENT_SETUP.md](DEPLOYMENT_SETUP.md)** - Complete deployment setup guide
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Quick setup checklist

**Quick Setup:**
1. Create `deploy` branch: `git checkout --orphan deploy && git rm -rf . && echo "# Deploy Branch" > README.md && git add README.md && git commit -m "Initialize deploy branch" && git push origin deploy && git checkout main`
2. Push to `main` branch - automatic deployment will trigger!
3. Configure Hostinger to pull from the `deploy` branch

**How it works:** Push to `main` → GitHub Actions builds → Pushes to `deploy` branch → Hostinger deploys

## To-Do List
- [ ] Set up deployment (see [DEPLOYMENT_SETUP.md](DEPLOYMENT_SETUP.md))
  - [ ] Create `deploy` branch in this repository
  - [ ] Enable workflow permissions (Settings → Actions → General)
  - [ ] Test workflow by pushing to `main`
  - [ ] Configure Hostinger to pull from `deploy` branch
- [ ] Create and set up social media accounts
  - [ ] Instagram: @vectashield_llc
  - [ ] LinkedIn: company/vectashield
  - [ ] GitHub organization: VectaShield
- [ ] Update social media links once accounts are active
- [ ] Add social media content and branding
- [ ] Configure custom domain settings (vectashield.com)
- [ ] Set up SSL certificate on Hostinger
- [ ] Set up analytics tracking (Google Analytics, etc.)
- [ ] Add blog/news section (optional)

## License
© 2026 VectaShield. All rights reserved.
