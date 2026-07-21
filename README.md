# GBXML Viewer (React)

A Vite + React version of the GBXML viewer that runs fully client-side and bundles Three.js locally.

## Setup
1. Install dependencies:
   - `npm install`
2. Start the dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`

## One-click scripts (Windows)
- Start the app: `start-app.bat`
- Stop the app: `stop-app.bat`

## Features
- Load a GBXML file from your computer
- 3D view with orbit controls and surface selection
- Surface details (ID, area, zone name)
- Edit surface type and apply changes with "Update Model"
- Manually choose any subset of walls by clicking them in the 3D view or surface list, then select their hosted windows
- Select individual windows, multi-select with Ctrl/Cmd-click, or select every window on a wall
- Add or update horizontal overhangs and left/right vertical fins with unit-aware projection depths
- Export generated shade geometry as gbXML `Shade` surfaces
- Level filter (Level 0, 1, 2...)
- Download the updated GBXML file
- On-screen legend for surface colors

## Future Development / Roadmap
- Improve GBXML validation and show clear warnings for missing or inconsistent model data
- Add richer filtering by floor, zone, surface type, and construction category
- Support comparison views between original and edited models
- Add import/export workflows for zone grouping, floor mapping, and analysis metadata
- Improve 3D interaction with better highlighting, camera presets, and section views
- Add summary dashboards for areas, surface types, zones, and model-level checks
- Expand test coverage for GBXML parsing, editing, and download behavior

## Notes
- All processing stays in the browser.
- Three.js is bundled locally so it works offline after build.
