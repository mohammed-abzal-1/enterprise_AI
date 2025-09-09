# EnterpriseAI Homepage

A modern, responsive homepage for an Enterprise AI application built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## Features

- ✨ **Modern Design**: Professional enterprise-focused design with smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for optimal build performance
- 🎨 **Tailwind CSS**: Utility-first CSS framework with custom design system
- 🎭 **Smooth Animations**: Motion-powered animations and transitions
- 🔧 **TypeScript**: Full type safety throughout the application
- 🎯 **SEO Optimized**: Meta tags and semantic HTML structure

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **ShadCN/UI** - Component library

## Quick Start

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd enterprise-ai-homepage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
├── App.tsx                 # Main application component
├── components/             # React components
│   ├── ui/                # ShadCN/UI components
│   ├── utils/             # Utility functions
│   └── figma/             # Figma-specific components
├── src/                   # Entry point
├── styles/                # Global styles and CSS
├── public/                # Static assets
└── guidelines/            # Development guidelines
```

## Components

- **Header** - Navigation with smooth scrolling
- **Hero** - Hero section with call-to-action
- **Features** - AI capabilities showcase
- **Solutions** - Use case demonstrations
- **Enterprise** - Enterprise-focused features
- **CTA** - Call-to-action section
- **Footer** - Site footer with links

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Other Platforms

The built application is a static SPA that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- DigitalOcean App Platform

## Environment Variables

No environment variables are required for the basic setup. For production, you may want to add:

- `VITE_API_URL` - API endpoint URL
- `VITE_ANALYTICS_ID` - Analytics tracking ID

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.