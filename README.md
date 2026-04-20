# ⚛️ ReactQuest

> **Master React, one challenge at a time.**

ReactQuest is a fully interactive, self-paced React learning app. Work through 15 hands-on lessons covering everything from JSX basics to advanced hooks, then test your knowledge with quizzes at the end of each lesson.

**Live demo:** [react-quest.mdev.com.lk](https://react-quest.mdev.com.lk/)

---

## ✨ Features

| Feature                 | Details                                                   |
| ----------------------- | --------------------------------------------------------- |
| 📚 15 Lessons           | Beginner → Advanced, covering all key React concepts      |
| 🧠 Random Quizzes       | 2 quiz variants per lesson — one is picked randomly       |
| 🔁 Retake Option        | Retry any quiz after completion with a fresh question     |
| 🎉 Confetti Celebration | Animated confetti fires on every correct answer           |
| 🌙 Dark / Light Mode    | Toggleable theme — remembers your preference              |
| 💾 Progress Persistence | Lesson completion auto-saves to localStorage              |
| 🔄 Reset Progress       | Start fresh at any time from Home or the certificate page |
| 📱 Responsive           | Works on mobile, tablet, and desktop                      |
| 🏆 Certificate Page     | Completion certificate after all 15 lessons               |
| 🚀 GitHub Pages Ready   | Deploys in one command                                    |

---

## 📖 Lessons

| #   | Lesson                           | Topic                                                 |
| --- | -------------------------------- | ----------------------------------------------------- |
| 1   | 🌱 What is React?                | Virtual DOM, components, why React                    |
| 2   | 📝 JSX                           | JSX syntax, expressions, className, self-closing tags |
| 3   | 🧩 Components                    | Function components, naming rules, composing          |
| 4   | 📦 Props                         | Passing data, destructuring, default values           |
| 5   | 🎛️ State with useState           | useState hook, re-renders, setter functions           |
| 6   | 🖱️ Handling Events               | onClick, onChange, event objects, common mistakes     |
| 7   | 🔀 Conditional Rendering         | Ternary, &&, if/else outside JSX                      |
| 8   | 📋 Lists & Keys                  | Array.map(), key prop, why keys matter                |
| 9   | ⚡ useEffect                     | Side effects, dependency array, cleanup functions     |
| 10  | 📝 Forms & Controlled Components | Controlled inputs, form submission                    |
| 11  | 🏗️ Lifting State Up              | Shared state, sibling communication, data flow        |
| 12  | 🌐 Context API                   | createContext, Provider, useContext, prop drilling    |
| 13  | 🔗 useRef                        | DOM refs, persisting values without re-renders        |
| 14  | 🪝 Custom Hooks                  | Extracting logic, naming convention, reusability      |
| 15  | ⚙️ useMemo & useCallback         | Memoization, performance optimization                 |

---

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite](https://vitejs.dev/)** — build tool & dev server
- **[React Router v7](https://reactrouter.com/)** — client-side routing (HashRouter for GitHub Pages)
- **Pure CSS** — no external component libraries; fully custom theme system with CSS custom properties
- **localStorage** — progress and theme persistence

---

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/mdev64/react-quest.git
cd react-quest

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── CodeBlock.jsx       # Syntax-highlighted code blocks with copy button
│   ├── Confetti.jsx        # Celebration particle animation
│   ├── ContentRenderer.jsx # Renders lesson blocks (text / code / tip / demo)
│   ├── Layout.jsx          # App shell: header, nav, progress bar, theme toggle
│   └── ReactLogo.jsx       # Official React SVG atom logo
├── data/
│   └── lessons.js          # All 15 lessons with content + 2-5 quizzes each
├── hooks/
│   ├── useProgress.js      # localStorage-backed lesson completion tracking
│   └── useTheme.js         # Dark/light mode with localStorage persistence
├── pages/
│   ├── Home.jsx            # Lesson grid + progress summary
│   ├── Lesson.jsx          # Individual lesson with random quiz + retake
│   └── Complete.jsx        # Completion certificate page
├── config.js               # App name, tagline, GitHub URL
└── index.css               # Global styles + CSS custom property theme system
```

---

## 📄 License

MIT — free to use, fork, and learn from.

---

Built with React · Made for learning · Open source
