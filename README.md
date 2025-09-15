# 🌍 Engverse

**Engverse** is a web application for learning English.  
At the current stage, the basic functionality (**MVP**) is implemented: lessons, exercises, and a simple profile page.  
In the future, the project will include a backend to support features like saving progress, user authentication, and more interactive content.

---

## 🚀 Tech Stack
- **TypeScript**
- **React + Vite**
- **Bootstrap + Bootstrap Icons**
- **remark / unist / mdast** (Markdown parsing for lessons)
- **Custom plugins** (see `Plugins/`)

---

## 📂 Project Structure
See the full structure in [docs/project-structure.md](./docs/project-structure.md).

Main directories:
- `Components/` — reusable UI components (icons, offcanvas, scroll handler, etc.).
- `Layout/` — shared interface parts (`Header`, `Footer`, `SharedLayout`).
- `Pages/` — application pages: `Home`, `Lessons`, `Profile`.
- `Plugins/` — custom Markdown plugins.
- `assets/` — static images and SVG icons.
- `data.ts`, `cards.json` — static content for lessons/cards.
