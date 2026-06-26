# TRIPT 360 VIEWER - V5.1

## Project Overview

TRIPT 360 Viewer is a lightweight web-based virtual walkthrough system built using HTML, CSS, JavaScript, Python, and Pannellum.

The system automatically generates navigation from panorama image files and allows users to explore 360° scenes through a simple and responsive interface.

Version V5.1 focuses on architecture refactoring and code organization. No major feature additions were made in this version. The objective was to separate responsibilities into modular files so future development becomes easier.

---

# Current Features

## Panorama Viewer

* Powered by Pannellum.
* Supports equirectangular panorama images.
* Auto-loads the first available scene.
* Smooth scene transition animation.

## Dynamic Scene Generation

Panorama images are read automatically from:

assets/panoramas/

Supported formats:

* .jpg
* .jpeg
* .png
* .webp

The Python script generates:

data/scenes.js

which is consumed by the viewer.

## Dynamic Navigation

Navigation buttons are generated automatically based on the contents of scenes.js.

No manual scene configuration is required.

## Scene Title

The current room name is displayed at the top center of the screen.

Example:

* Reception
* Lobby
* Cafe

The title updates automatically when changing scenes.

## Branding

A floating TRIPT logo is displayed in the interface.

Current placement:

Top Left

---

# Project Structure

v5_1

├── index.html

├── css
│   └── styles.css

├── js
│   ├── app.js
│   ├── viewer.js
│   ├── navigation.js
│   ├── branding.js
│   └── utils.js

├── data
│   ├── generate_scenes.py
│   └── scenes.js

├── assets
│   ├── panoramas
│   └── logos

└── essential
└── README.md

---

# File Responsibilities

## index.html

Main application layout.

Contains:

* Panorama container
* Scene title container
* Navigation container
* Branding container

Loads all CSS and JavaScript modules.

---

## css/styles.css

Responsible for:

* Layout
* Responsive design
* Navigation styling
* Scene title styling
* Branding styling

Contains all visual appearance settings.

---

## js/app.js

Application entry point.

Responsible for:

* Initializing the application
* Calling startup functions

Main startup sequence:

validateScenes()
buildScenes()
createViewer()
createNavigation()
initializeBranding()

---

## js/viewer.js

Responsible for:

* Building panorama scene objects
* Loading panorama images
* Creating the Pannellum viewer
* Scene switching

This file controls how panorama files are loaded.

Current panorama path:

assets/panoramas/

---

## js/navigation.js

Responsible for:

* Dynamic navigation creation
* Navigation button events
* Scene title updates
* Active button state

---

## js/branding.js

Responsible for:

* TRIPT logo
* Branding interactions

Future branding features should be added here.

Examples:

* Website links
* Social links
* Contact popup
* Client branding

---

## js/utils.js

Contains shared helper functions.

Currently:

* Scene validation

Future utility functions should be added here.

---

## data/generate_scenes.py

Responsible for:

* Reading panorama image files
* Generating scenes.js automatically

The script creates required folders if they do not exist.

Current scan location:

assets/panoramas/

Generated output:

data/scenes.js

---

## data/scenes.js

Automatically generated file.

Contains:

window.PANORAMA_SCENES

Do not edit manually.

This file is regenerated whenever generate_scenes.py is executed.

---

# Development Workflow

## Adding New Panoramas

Step 1

Copy panorama images into:

assets/panoramas/

Step 2

Run:

python data/generate_scenes.py

Step 3

Open index.html

The new scenes will automatically appear.

---

# Future Roadmap

## V5.2

Branding Improvements

Possible features:

* Better logo integration
* Website links
* Contact popup

## V5.3

Walkthrough Controls

Possible features:

* Previous Scene
* Next Scene
* Keyboard Navigation

## V5.4

Hotspots

Possible features:

* Room-to-room navigation
* Information markers
* Image popups

## V5.5

Thumbnail Navigation

Possible features:

* Preview images
* Scene gallery

## V6

Floorplan Navigation

Possible features:

* Interactive floorplan
* Floor switching
* Room selection from plan

---

# Design Philosophy

The panorama should remain the primary focus of the experience.

All UI elements should be minimal, unobtrusive, and secondary to the architecture visualization.

The system is designed to support future expansion while keeping the core viewer simple and maintainable.

---

# Author

TRIPT

Designing spaces that inspire
