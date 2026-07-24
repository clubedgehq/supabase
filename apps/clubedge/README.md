# Clubedge Marketing Website

Clubedge is a community management platform for growing clubs and organizations. This is the public-facing marketing website built with Next.js.

## Getting Started

### Setup

1. Install dependencies: `pnpm install`
2. Copy the example env file: `cp .env.local.example .env.local`
3. Start the development server: `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

Refer to the [Development Guide](../../DEVELOPERS.md) for more details on running the monorepo.

## Development Guidelines

### Images

- **Resize images**: Resize all new images to the maximum resolution needed for frontend display. Don't upload oversized files.
- **Compress images**: Compress images before committing using tools like Clop or ImageOptim to reduce file size without quality loss.
- **Image locations**: Store images in `public/images/` with appropriate subdirectories (e.g., `public/images/features/`, `public/images/blog/`).

## Project Structure

- `app/` - Next.js App Router routes and pages
- `components/` - Reusable React components
- `lib/` - Utility functions and helpers
- `public/` - Static assets (images, fonts, etc.)
- `data/` - Content and configuration data
- `next.config.mjs` - Next.js configuration

## Building Features

### Adding New Pages

1. Create a new route in `app/` using the App Router file structure
2. Use existing components from `components/` for consistency
3. Update navigation if needed in the header/footer components

### Styling

This project uses **Tailwind CSS** for styling with a semantic design token system defined in `globals.css`. Follow the existing color and spacing conventions for consistency with the design system.
