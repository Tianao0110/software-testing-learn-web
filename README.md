# Software Testing Study Guide

> Bilingual, interactive study guide for **SAIT CPRG305 — Software Testing &amp; Deployment**.
> 12 chapters, hundreds of example-driven cards, scenario quizzes, and interactive widgets.

🌐 **Live site:** https://tianao0110.github.io/software-testing-learn-web/

📖 **Based on:** Everett &amp; McLeod, *Software Testing: Testing Across the Entire Software Development Life Cycle* (Wiley, 2007) + course modules 1–7.

---

## ✨ Features

- **12 self-contained units** matching the textbook chapters 1–15
- **Example-driven cards** — every abstract concept is grounded in a real scenario (Library Management System, e-commerce, banking, healthcare, etc.)
- **Bilingual** — English content with Chinese (`zh-note`) summaries on every card
- **Interactive widgets** built into key units:
  - Unit 2 — SDLC Comparator · Risk Calculator · Agile Sprint Animator
  - Unit 3 — Testing Chessboard · Coverage Visualizer · Black Box Technique Picker
  - Unit 4 — Bathtub Diagram · Test Plan Explorer · Test Case Anatomy · SRS Walkthrough
  - Unit 5 — LMS Defect Hunter · Review Technique Picker
  - Unit 6 — Boundary Value Analyzer
  - Unit 7 — Security Role/Permission Matrix
  - And more in Units 8, 11, 12
- **22 quiz questions per unit** including scenario-based + cross-chapter reinforcement
- **Modern notes** (📌 MODERN 2026) on every key concept — bridging the 2007 textbook to today's tools (CI/CD, AI testing, SonarQube, k6, CrowdStrike 2024, etc.)
- **Real-world case studies**: St. Mary's Hospital (Ch.1) · HSBC outage (Ch.3+5) · Heathrow T5 (Ch.7) · LA Air Traffic Control (Ch.8)
- **Progress tracking** — quiz score per unit + overall completion %

---

## 🏗️ Architecture

Pure vanilla HTML + JS + CSS, **zero dependencies**, runs entirely in the browser. No build step.

```
index.html              ← Main page (loads everything)
interactives.js         ← Global registry: var INTERACTIVES = {}
modern-notes.js         ← Global registry: var MODERN_NOTES = {}
extras.js               ← Confusion Buster + other study tools
unit1.js ... unit12.js  ← Each unit fully self-contained:
                          ├─ EXTRA_UNITS.push({ concepts, quiz })
                          ├─ INTERACTIVES[N] = function(el) {...}
                          └─ MODERN_NOTES['N-X'] = {...}
```

**Why this matters:** to edit a chapter, you only touch ONE file. To add a new chapter, create one `unitN.js` and add one `<script>` tag. Zero refactoring needed.

---

## 🚀 Use it

### Online (recommended)
Just open https://tianao0110.github.io/software-testing-learn-web/

### Locally
```bash
git clone git@github.com:Tianao0110/software-testing-learn-web.git
cd software-testing-learn-web
# Just double-click index.html, or:
start index.html        # Windows
open  index.html        # macOS
xdg-open index.html     # Linux
```

No server, no `npm install`, no build. The HTML file works as a static page in any modern browser.

---

## 📚 Chapter map

| Unit | Pages | Title | Cards | Quiz |
|---|---|---|---|---|
| 1 | pp.1–28 | Introduction to Software Testing | 13 | 22 |
| 2 | pp.29–58 | The Software Development Life Cycle | 13 | 22 |
| 3 | pp.59–78 | Testing Strategies (Chess Pieces) | 13 | 22 |
| 4 | pp.79–92 | Test Planning | 13 | 25 |
| 5 | pp.93–98 | Static Testing | 13 | 22 |
| 6 | pp.99–121 | Functional Testing | 12 | 22 |
| 7 | pp.122–127 | Structural (Non-Functional) Testing | 12 | 22 |
| 8 | pp.129–148 | Performance Testing | 7 | 8 |
| 9 | pp.150–158 | Testing Environments | 7 | 7 |
| 10 | pp.159–175 | Automated Testing Tools | 7 | 7 |
| 11 | pp.176–201 | Test Results &amp; Analysis | 7 | 7 |
| 12 | pp.203–254 | Software Deployment (Ch.13–15) | 7 | 6 |

Units 1–7 are heavily expanded with modern context + interactive widgets. Units 8–12 follow the textbook structure (room to grow as the course progresses).

---

## 🙏 Credits

- **Textbook:** Everett, G. D., &amp; McLeod Jr, R. (2007). *Software Testing: Testing Across the Entire Software Development Life Cycle*. John Wiley &amp; Sons.
- **Course:** SAIT — Software Development Diploma, CPRG305 (2026 cohort).
- **Modules:** Course slide decks (Modules 1–7) by the SAIT CPRG305 instructor.

Built with help from [Claude Code](https://claude.ai/code) by Anthropic.

---

## 📄 License

Personal study material — content references the textbook; please consult the original sources for authoritative information.
