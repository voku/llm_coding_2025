# AI Coding Paradigms 2025

A comprehensive visualization and comparison of modern AI-assisted coding approaches, from low-code platforms to autonomous agents.

## Overview

This interactive web application provides a data-driven overview of 15+ different AI coding paradigms, comparing their automation levels, production readiness, team scalability, and other key metrics. Built with React, TypeScript, and Recharts.

## Features

- **Interactive Comparison Table** - Side-by-side comparison of all paradigms
- **Visual Analytics** - Scatter plot showing automation vs. production readiness
- **Detailed Insights** - Click any paradigm to see comprehensive details
- **Responsive Design** - Works on desktop and mobile devices

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/voku/llm_coding_2025.git
   cd llm_coding_2025
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages. Every push to the `main` branch will trigger a build and deployment.

**Setup Instructions:**

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under "Code and automation")
3. Set **Source** to "GitHub Actions"
4. Push to the `main` branch to trigger deployment

The site will be available at: `https://<username>.github.io/llm_coding_2025/`

You can also manually trigger deployment:
- Go to the **Actions** tab
- Select the "Deploy to GitHub Pages" workflow
- Click "Run workflow"

## Project Structure

```
├── App.tsx              # Main application component
├── components/          # React components (Table, Chart, Modal, etc.)
├── constants.ts         # Paradigm data and configuration
├── types.ts            # TypeScript type definitions
├── index.html          # HTML entry point
├── index.tsx           # React entry point
└── vite.config.ts      # Vite configuration
```

## Key Files Detector

When working on this codebase, these are the critical files to understand:

### Core Application Logic
- **`constants.ts`** - Contains all paradigm data (PARADIGMS array). This is the single source of truth for content.
- **`types.ts`** - TypeScript interfaces and enums defining the data structure.
- **`App.tsx`** - Main component orchestrating the application layout and state.

### UI Components
- **`components/ParadigmTable.tsx`** - Main comparison table
- **`components/ParadigmChart.tsx`** - Scatter plot visualization
- **`components/DetailModal.tsx`** - Detailed view for each paradigm
- **`components/Legend.tsx`** - Icon and color legend

### Configuration
- **`vite.config.ts`** - Build configuration
- **`tsconfig.json`** - TypeScript compiler settings
- **`package.json`** - Dependencies and scripts

### Adding a New Paradigm
To add a new paradigm, edit `constants.ts` and add a new entry to the `PARADIGMS` array following the existing structure.

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Recharts** - Data visualization
- **Tailwind CSS** - Styling (via CDN)
- **Vite** - Build tool and dev server

## License

See repository for license details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
