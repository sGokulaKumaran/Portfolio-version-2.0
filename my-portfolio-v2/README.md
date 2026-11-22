# Gokula Kumaran — 3D Interactive Developer Portfolio (`my-portfolio-v2`)

> **Vite + React 19 + TypeScript + Three.js (`@react-three/fiber`) application powering Portfolio v2.0.**

---

## ✨ Features & Architecture

- **Custom GLSL Shader Backdrop (`src/three/Background.tsx`)**: Time-uniform (`uTime`) driven fragment shader blending deep cosmic navy and gold wave glow with radial vignette attenuation.
- **3D BufferGeometry Particle Field (`src/three/Particles.tsx`)**: 2,000 depth-attenuated 3D particles rotating continuously across X and Y axes inside the React Three Fiber `<Canvas>`.
- **Expandable Dual-Category Project Deck (`src/sections/Projects.tsx`)**: Interactive card switcher for **Games** and **Codes** with a slide-over **`DetailPanel`** supporting `.mp4` gameplay previews and `.zip` downloads.
- **Zustand Layout Store & Custom Cursor**: Lightweight global state in `src/store/layoutStore.ts` paired with a custom pointer tracker (`src/components/Cursor.tsx`).

---

## 🛠️ Tech Stack

- **Framework**: React 19, TypeScript ~5.9, Vite 7
- **3D Engine**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`
- **Motion & UI**: GSAP, Framer Motion, Lenis Smooth Scroll, Tailwind CSS

---

## 🚀 Scripts

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production bundle
npm run preview
```
