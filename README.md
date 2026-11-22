# Gokula Kumaran — 3D Interactive Developer Portfolio (v2.0)

> **An interactive 3D WebGL & React portfolio blending real-time GLSL shaders, a 2,000-particle 3D starfield, and expandable dual-deck project showcases for Game & Full-Stack Development.**

---

## ✨ Overview

**Portfolio v2.0** is an experimental 3D web portfolio built with **React 19**, **TypeScript**, **Three.js**, and **React Three Fiber (R3F)**. It combines a custom GLSL fragment shader backdrop with a rotating 3D particle universe and an interactive card-expansion UI to showcase Unity game builds, AI applications, and shader experiments.

The repository includes:
- **`my-portfolio-v2/`** — The full modular **Vite + React + TypeScript + Three.js** application.
- **`my-portfolio-v2/src/FullApp.html` & `codes/index code v1.txt`** — Standalone single-file HTML/CSS/JS prototype snapshots created during the v2 design iteration.

---

## 🚀 Key Features & Technical Mechanisms

### 1. Real-Time GLSL Shader Backdrop (`src/three/Background.tsx`)
- Renders a full-viewport `<planeGeometry>` positioned behind the scene (`z = -5`) powered by a custom ` THREE.ShaderMaterial`.
- **Uniform Pipeline**: Pipes the elapsed clock time (`uTime`) on every frame via React Three Fiber's `useFrame` hook.
- **Fragment Shader Math**: Computes radial distance from the viewport center (`distance(vUv, center)`), blends a deep cosmic void (`vec3(0.02, 0.02, 0.03)`) with warm gold (`vec3(0.8, 0.65, 0.35)`), applies a `smoothstep(0.8, 0.4, dist)` vignette fade, and overlays a sinusoidal horizontal wave glow (`sin(vUv.y * 4.0 + uTime * 0.2) * 0.15`).

### 2. 3D Cosmic Particle System (`src/three/Particles.tsx`)
- Populates a `Float32Array` buffer of **2,000 3D points** (`6,000` float coordinates) distributed across a $30 \times 30 \times 30$ cubic volume.
- Attaches the coordinates to a `<bufferGeometry>` via `<bufferAttribute attach="attributes-position" />`.
- Continuously rotates the particle cloud along both the Y-axis (`+0.0008 rad/frame`) and X-axis (`+0.0003 rad/frame`) with depth-attenuated `<pointsMaterial size={0.03} color="#6a8cff" sizeAttenuation />`.

### 3. Dual-Deck Expandable Project Showcase (`src/sections/Projects.tsx` & `src/components/DetailPanel.tsx`)
- Splits work into two interactive decks: **🎮 Games** (*The Back Exit*, *Horror Prototype*, *AI Horror NPC*) and **💻 Codes** (*AI Biotechnology App*, *Portfolio Website*, *Shader Playground*).
- Clicking a deck dynamically expands its grid while collapsing inactive categories.
- Selecting any project opens the slide-over **`DetailPanel`**, supporting embedded gameplay video playback (`.mp4`), high-resolution screenshots, and direct `.zip` game build downloads.

### 4. Custom Interactive Chrome (`src/components/`)
- **`Loader.tsx`**: Gatekeeper boot screen that wraps the application and transitions smoothly into the 3D scene.
- **`Cursor.tsx`**: Custom pointer follower replacing the default system cursor for a cohesive game-UI feel.
- **`Navbar.tsx`**: Fixed top navigation bar providing smooth section jumps (`#hero`, `#about`, `#projects`).
- **`store/layoutStore.ts`**: Lightweight global state management powered by **Zustand**.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, TypeScript 5.9, Vite 7 |
| **3D & WebGL** | Three.js (`0.183`), `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, Custom GLSL Shaders |
| **Animation & Scroll** | GSAP (`3.14`), Framer Motion (`12.34`), `@studio-freight/lenis` |
| **State & Styling** | Zustand (`5.0`), Tailwind CSS (`3.4`), Modular CSS (`src/styles/*.css`) |

---

## 📂 Repository Structure

```text
My portfolio 2.0/
├── codes/
│   └── index code v1.txt              # Early single-file prototype code
├── my-portfolio-v2/                   # Main Vite + React + Three.js application
│   ├── public/                        # Static assets (game images, videos, icons)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cursor.tsx             # Custom interactive cursor
│   │   │   ├── DetailPanel.tsx        # Slide-over project video/download drawer
│   │   │   ├── Loader.tsx             # Initial loading screen wrapper
│   │   │   └── Navbar.tsx             # Top navigation bar
│   │   ├── hooks/
│   │   │   └── useMagnetic.ts         # Magnetic pointer attraction hook
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Landing hero section
│   │   │   ├── About.tsx              # Developer bio, education & skills
│   │   │   └── Projects.tsx           # Dual-deck Games & Codes showcase
│   │   ├── store/
│   │   │   └── layoutStore.ts         # Zustand UI state store
│   │   ├── styles/                    # Scoped section & animation stylesheets
│   │   ├── three/
│   │   │   ├── Scene.tsx              # R3F Canvas container
│   │   │   ├── Background.tsx         # Custom GLSL fragment shader plane
│   │   │   ├── Particles.tsx          # 2,000-point 3D rotating starfield
│   │   │   └── Character.tsx          # 3D entity placeholder
│   │   ├── App.tsx                    # Root component composition
│   │   ├── FullApp.html               # Self-contained HTML/JS space prototype
│   │   └── main.tsx                   # React DOM entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
└── README.md
```

---

## ⚡ Getting Started Locally

### Prerequisites
- **Node.js** `v18+` and **npm**

### Installation & Development

```bash
# 1. Navigate into the Vite application directory
cd "my-portfolio-v2"

# 2. Install dependencies
npm install

# 3. Start the Vite development server with HMR
npm run dev
```

### Production Build

```bash
# Type-check with TypeScript and bundle for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 👤 Author

**Gokula Kumaran S**  
*Game & Full-Stack Developer*  
- **GitHub**: [@sGokulaKumaran](https://github.com/sGokulaKumaran)
- **LinkedIn**: [gokula-kumaran-s](https://www.linkedin.com/in/gokula-kumaran-s-503545328/)
- **Email**: [gokulakumaran2007@gmail.com](mailto:gokulakumaran2007@gmail.com)
