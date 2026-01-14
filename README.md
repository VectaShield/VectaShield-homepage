# VectaShield.com Website

Official homepage for VectaShield - Powering The Future through engineering excellence in defense technology and Artificial Intelligence.

## About
VectaShield is a defense technology company specializing in defense solutions, defense technologies, digital transformation, and product engineering. This website serves as our professional landing page and central hub for connecting with clients, partners, and the defense tech community.

## Tech Stack
Built with modern web technologies:
- React - Component-based UI framework
- Vite - Next-generation frontend tooling
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Animation library
- Docker - Containerization
- GitHub Actions - Automated CI/CD pipeline
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
# Navigate to src directory
cd src

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

**Status**: ✅ Fully automated deployment is configured and working!

Every push to the `main` branch automatically:
1. Triggers GitHub Actions workflow
2. Builds the React application in Docker
3. Deploys built files to the `deploy` branch
4. Hostinger pulls from `deploy` branch and serves the site

**To deploy changes**: Simply push to `main` branch
```bash
git add .
git commit -m "Your changes"
git push origin main
```

The site will be live in ~30-40 seconds.

## License
© 2026 VectaShield. All rights reserved.
