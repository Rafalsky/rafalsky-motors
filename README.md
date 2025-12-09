# RafalSky Motors

A premium car dealership website built with React, TypeScript, and Tailwind CSS.

## Project Overview

RafalSky Motors is a single-page application (SPA) designed to showcase luxury vehicles. It features a responsive design, vehicle listings, detailed vehicle views, and a contact form simulation.

### Features

- **Home Page**: Welcoming hero section and key dealership features.
- **Vehicle Inventory**: Browse a curated list of high-end vehicles.
- **Vehicle Details**: Detailed view of specific cars with pricing, specs, and a simulated purchase flow.
- **Contact Form**: Interactive form for customer inquiries.
- **Responsive Design**: Mobile-friendly navigation and layout using Tailwind CSS.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
/
├── components/       # Shared UI components (Header, Footer, Layout)
├── pages/           # Page components (Home, VehicleList, Detail, etc.)
├── types.ts         # TypeScript definitions and mock data
├── App.tsx          # Main application component and routing
├── index.tsx        # Entry point
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository (if applicable) or download the source.
2. Install dependencies:

```bash
npm install
```

### Development

To run the application in development mode with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

To compile the project for production:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static assets (HTML, CSS, JS).

To preview the production build locally:

```bash
npm run preview
```

## Deployment

Since this is a static site (SPA), the contents of the `dist` folder can be deployed to any static hosting provider such as:
- GitHub Pages
- Vercel
- Netlify
- AWS S3 / CloudFront
