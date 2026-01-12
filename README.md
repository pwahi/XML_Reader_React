# GBXML Viewer (React)

A Vite + React version of the GBXML viewer that runs fully client-side and bundles Three.js locally.

## Setup
1. Install dependencies:
   - `npm install`
2. Start the dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`

## Features
- Load a GBXML file from your computer
- 3D view with orbit controls and surface selection
- Surface details (ID, area, zone name)
- Edit surface type and apply changes with "Update Model"
- Level filter (Level 0, 1, 2...)
- Download the updated GBXML file
- On-screen legend for surface colors

## Notes
- All processing stays in the browser.
- Three.js is bundled locally so it works offline after build.
