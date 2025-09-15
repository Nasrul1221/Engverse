Documentation for files below
```
│   App.tsx
│   cards.json
│   data.ts
│   main.tsx
│   markdown-styles.css
│   vite-env.d.ts
│
├───assets
│   │   hero-logo.svg
│   │   logo.svg
│   │
│   └───Cards
│           headphones.svg
│           letterA.svg
│           notebook.svg
│           pen.svg
│
├───Components
│   │   MyOffcanvas.tsx
│   │   ScrollToTop.tsx
│   │
│   ├───123
│   └───Icons
│           Call.tsx
│           CircleProfile.tsx
│           Email.tsx
│           Journal.tsx
│           Location.tsx
│           MainLogo.tsx
│           styles.css
│
├───Layout
│   │   Footer.tsx
│   │   Header.tsx
│   │   SharedLayout.tsx
│   │
│   └───Styles
│           SLStyles.css
│
├───Pages
│   │   Profile.tsx
│   │
│   ├───Home
│   │       CardsSection.tsx
│   │       HeroSection.tsx
│   │       Home.tsx
│   │       styles.css
│   │
│   └───Lessons
│       │   Lessons.tsx
│       │   SideBar.tsx
│       │   styles.css
│       │   types.ts
│       │
│       └───ExactLesson
│               EmbeddedExercise.tsx
│               ExercisePage.tsx
│               Lesson.tsx
│               LessonPage.tsx
│               OptionsExercise.tsx
│               Result.tsx
│               TextExercise.tsx
│
└───Plugins
        RemarkPlugin.ts
        styles.css
```

# 📂 Project Structure

| Path | Description |
|------|-------------|
| `App.tsx` | Main application component (root of the app). |
| `main.tsx` | Entry point of the React app (ReactDOM render). |
| `data.ts` | Static data used in lessons/cards. |
| `cards.json` | JSON with cards data for the home page. |
| `markdown-styles.css` | Styles for rendered markdown lessons. |
| **`assets/`** | Images, logos, and SVG assets. |
| `assets/Cards/` | Icons used in cards (notebook, pen, etc). |
| **`Components/`** | Reusable components across the app. |
| `Components/MyOffcanvas.tsx` | Sidebar offcanvas component. |
| `Components/ScrollToTop.tsx` | Scroll restoration on route change. |
| `Components/Icons/` | Custom SVG icons as React components. |
| **`Layout/`** | General layout components. |
| `Layout/Header.tsx` | Navigation header. |
| `Layout/Footer.tsx` | Application footer. |
| `Layout/SharedLayout.tsx` | Common wrapper layout for all pages. |
| `Layout/Styles/SLStyles.css` | Layout-specific styles. |
| **`Pages/`** | Page-level components (React Router routes). |
| `Pages/Profile.tsx` | User profile page. |
| `Pages/Home/` | Home page with hero and cards sections. |
| `Pages/Lessons/` | Lessons page with sidebar and nested lessons. |
| `Pages/Lessons/ExactLesson/` | Components for specific lesson content. |
| **`Plugins/`** | Custom plugins and styles. |
| `Plugins/RemarkPlugin.ts` | Remark plugin for Markdown processing. |
