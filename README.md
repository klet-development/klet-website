# Kameron Argis - Portfolio

Minimalist single-page portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- React 18.3
- TypeScript 5.6
- Vite 6.0
- Modern CSS with responsive design

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### 1. Create GitHub Repository

```bash
# Create a new repository on GitHub (github.com/new)
# Then add the remote:
git remote add origin https://github.com/YOUR_USERNAME/klet-development.com.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

### 3. Configure Custom Domain

1. In your Vercel project, go to "Settings" → "Domains"
2. Add your custom domain
3. Update your domain's DNS records as instructed by Vercel:
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record pointing to your Vercel deployment

## Project Structure

```
├── src/
│   ├── App.tsx          # Main component
│   ├── App.css          # Component styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies
```

## Features

- Fully responsive design (mobile-first)
- Minimalist black & white aesthetic
- Clean typography with proper spacing
- Semantic HTML
- Optimized for performance
- Production-ready build

## License

Private
