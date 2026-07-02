# CLAUDE.md — Project Conventions & Agent Handoff

> Read this before touching any file. This document captures the conventions,
> style rules, and workflow established across the whole project. Follow it
> when adding new content or editing existing content.

---

## 1. Project Purpose

Bilingual (EN + zh-note) interactive study guide for SAIT CPRG305
(Software Testing & Deployment). 12 units mapping to the 15 chapters of
Everett & McLeod (2007), enriched with course-module content and modern
(2020s+) context. Pure vanilla HTML/JS/CSS, zero build step, deployed to
GitHub Pages.

- **Repo:** https://github.com/Tianao0110/software-testing-learn-web
- **Live:** https://tianao0110.github.io/software-testing-learn-web/
- **User is Chinese-speaking** — respond in Chinese, code + content in English + `zh-note` in Chinese.

---

## 2. File Layout

```
index.html              Main app (loads all units, renders navigation + tabs)
interactives.js         GLOBAL REGISTRY — DO NOT bloat. Just: var INTERACTIVES = {};
modern-notes.js         GLOBAL REGISTRY — DO NOT bloat. Just: var MODERN_NOTES = {};
extras.js               Study tools (Confusion Buster, etc.) — leave alone unless asked
unit1.js ... unit12.js  SELF-CONTAINED per unit — cards + quiz + widget + notes
.gitignore              Excludes _*.txt, .claude/, editor cruft
README.md               Public project README
CLAUDE.md               (this file)
```

**Never re-populate** `interactives.js` or `modern-notes.js`. Everything
goes into the relevant `unitN.js`.

---

## 3. The Self-Contained Unit Pattern (KEY ARCHITECTURAL RULE)

Every `unitN.js` has **three sections** in this order:

```js
// Unit N: <Title> (Chapter X, pp.XX-YY) — Module N
EXTRA_UNITS.push({
  id: N,
  concepts: [ /* cards */ ],
  quiz:     [ /* questions */ ]
});

// ============================================================
// Unit N: <descriptive> Interactive Widget(s)
// ============================================================
INTERACTIVES[N] = function(el) { /* widget code, may have tabs */ };

// ============================================================
// Unit N: Modern Notes
// Keys are 'unitId-conceptIndex' (0-based). Concept order:
// 0=<title>, 1=<title>, 2=<title>, ...  ← MUST MATCH concept array order
// ============================================================
MODERN_NOTES['N-1'] = { title, year, content };
MODERN_NOTES['N-2'] = { title, year, content };
...
```

**Why this matters:** to edit a unit, only touch its file. To add a new
unit, create one file + add one `<script>` tag to `index.html`. Global
registries stay minimal.

---

## 4. Standard Unit Target (Units 1-7 pattern)

For a typical "expanded" unit:

| Item | Target |
|---|---|
| Concept cards | **~13** (12–14 OK) |
| Card 0 | **🎯 Learning Objectives** (always first) |
| Quiz questions | **~22** (mix MC + SA) |
| SA (short answer) questions | ~5-6 |
| Scenario-based questions | ~5-6 (use `SCENARIO:` prefix in `q`) |
| Interactive widgets | 1–4 (multi-tab if >1) |
| Modern notes | 5–8 (not every card needs one) |

Units 8–12 are still baseline textbook-only; they can stay that way until
the user provides a Module PDF for that chapter.

---

## 5. Card Format Rules

### Structure

```js
{title:"<optional emoji> <Title>",ref:"pp.XX–YY" or "Module N",content:`<HTML>`},
```

- One card per line in the source file (long lines OK).
- `content` is a backtick template literal containing HTML.
- **Always** end `content` with a `<div class="zh-note">中文一句话总结</div>`.

### Standard HTML patterns

- **Tables > paragraphs.** Comparisons, lists of ~3+ items, before/after → use `<table>` with the standard styling below.
- **Callouts** for key insights:
  - `<div class="callout">…</div>` = blue tip
  - `<div class="callout important">…</div>` = orange warning
- **Inline highlights:** `<span class="key-term">term</span>` for glossary-style terms.
- **`zh-note`** at the bottom of EVERY card. Aim for 1–2 sentences that capture the core point in Chinese.

### Standard table skeleton

```html
<table style="width:100%;border-collapse:collapse;margin:14px 0;font-size:13px;">
  <thead>
    <tr style="background:var(--accent-bg);border-bottom:2px solid var(--accent);">
      <th style="padding:8px;text-align:left;color:var(--accent-dim);">Col</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid var(--border-light);">
      <td style="padding:6px 8px;">…</td>
    </tr>
    <tr style="background:var(--bg-warm);">…</tr>  <!-- zebra row -->
  </tbody>
</table>
```

Alternate zebra rows using `background:var(--bg-warm);`.

### Scenario examples

Preferred scenario contexts (used across the project — reuse them for cross-unit consistency):
- **Library Management System (LMS)** — Units 1, 5, 6
- **Student Registration System (SRS)** — Units 4, 5
- **E-commerce** — Units 2, 3, 6
- **Banking (HSBC style)** — Units 3, 4
- **Hospital / Healthcare** — Units 1, 7

---

## 6. Emoji Policy 🚨 **IMPORTANT**

The user explicitly asked for **minimal emojis** — they impede reading.

**DO:**
- Use `🎯` on the Learning Objectives card (always first card, always this emoji).
- Use meaningful emojis on _navigation-critical_ cards: real-world case studies (`🏥` `🏦` `✈️`), interactive tab titles.
- Use emojis in `zh-note` sparingly (0-1 per note).

**DON'T:**
- Don't put emojis on every card. It's OK — even preferred — for "core definition" cards like *"What is X?"* to have NO emoji.
- Don't emoji-bomb answer explanations or table headers.
- Don't add emojis to old cards during refactors just to make them "consistent."

Rule of thumb: if you can remove an emoji and the card still reads clearly, remove it.

---

## 7. Quiz Format Rules

### Multiple choice

```js
{type:"mc",q:"<question>",options:["a","b","c","d"],answer:<0-3>,explanation:"<why>"},
```

- 4 options.
- `answer` is 0-indexed.
- `explanation` should teach — not just restate the answer. Reference back to card content.

### Short answer

```js
{type:"sa",q:"<question>",sampleAnswer:"<multi-line answer>",keywords:["k1","k2",...]},
```

- `sampleAnswer` can use `\n` for line breaks.
- `keywords` array is used by the self-grade UI — pick the 5–8 essential terms.

### Question mix targets

- 60–70% MC, 30–40% SA
- 5–6 scenario questions per unit (start `q` with `SCENARIO: `)
- 2–3 cross-unit references (e.g., "Recall Boehm's Rule from Unit 1…")

---

## 8. Modern Notes Format

```js
MODERN_NOTES['N-X'] = {
  title: '<Short punchy title>',
  year: '2026',       // or '2024', '2025' when citing a specific event
  content: '<HTML with <strong>bold</strong> emphasis on key modern terms>'
};
```

Rules:
- `X` = 0-based concept index in that unit's `concepts` array. **Must match.**
- Only add notes where the 2007 book meaningfully diverges from modern practice.
- Reference specific modern tools (Cypress, k6, SonarQube, GitHub Actions, etc.).
- Cite recent events when relevant (CrowdStrike 2024, HSBC 2017, Rogers 2022, etc.).
- Keep the index comment block at the top of the notes section UP TO DATE when inserting/removing cards.

### Renumbering when inserting a card

If you insert a new concept at position N, EVERY modern note index >= N
must shift +1. Do these edits in **descending** order to avoid collisions:

```
7-10 → 7-11   (do first)
7-9  → 7-10
7-8  → 7-9
...
```

Also update the `// 0=..., 1=..., ...` comment block.

---

## 9. Interactive Widget Rules

### Basic shape

```js
INTERACTIVES[N] = function(el) {
  let state = ...;
  function render() {
    let h = '<html string>';
    el.innerHTML = h;
  }
  window._uNfoo = function(x) { state = x; render(); };
  render();
};
```

### Multi-tab pattern (preferred when 2+ widgets)

Use a top tab strip and one `render*()` function per tab. See `unit2.js`
or `unit4.js` for the canonical pattern.

### CSS Variables — **use NEW scheme only**

The site was refactored. Always use these:

| ✅ New (use these) | ❌ Old (never use) |
|---|---|
| `var(--text)` | `var(--color-text-primary)` |
| `var(--text-dim)` | `var(--color-text-secondary)` |
| `var(--text-light)` | `var(--color-text-tertiary)` |
| `var(--surface)` | `var(--color-background-primary)` |
| `var(--surface2)` | (various) |
| `var(--bg-warm)` | `var(--color-background-secondary)` |
| `var(--accent-bg)` | `var(--color-background-info)` |
| `var(--accent)` | `var(--color-border-info)` |
| `var(--accent-dim)` | `var(--color-text-info)` |
| `var(--border)` | `var(--color-border-secondary)` |
| `var(--border-light)` | `var(--color-border-tertiary)` |
| Semantic colors: `var(--green)`, `var(--red)`, `var(--orange)`, `var(--purple)`, `var(--blue)` | — |
| `<green|red|orange|blue|purple>-bg` versions for tinted backgrounds | — |
| Literal `6px` / `8px` / `10px` | `var(--border-radius-*)` |
| omit `font-family` (inherit) | `var(--font-sans)` |

If you see any legacy `var(--color-*)` while editing, replace it — it renders as broken CSS.

### Window handler naming

Prefix all `window._X` handlers with a unit-specific tag to avoid collisions:
- Unit 2: `window._u2foo`
- Unit 3: `window._u3foo`
- Unit 4: `window._u4foo`
- etc.

---

## 10. Workflow: Adding a New Module's Content to Existing Unit

The typical loop when the user sends `CL-ModuleN.pdf` or similar:

1. **Convert PDF:**
   ```bash
   pdftotext -layout "path/to/CL-ModuleN.pdf" _moduleN.txt
   ```
   (The `_moduleN.txt` is gitignored — it's a scratch file.)

2. **Read the current `unitN.js`** to see what's already there.

3. **Compare** — list what's in the slides but missing from the guide.

4. **Propose the changes** to the user (brief bullet list). Wait for approval.

5. **Implement** all changes inside `unitN.js` only.
   - Add cards line by line (respect the card format above).
   - Add quiz questions.
   - Update the widget if new interactive concepts appear.
   - Add modern notes for the new cards (or update existing ones).
   - Update the `// 0=..., 1=..., ...` comment block if indices shift.

6. **Verify** braces / backticks balance:
   ```powershell
   $c = [IO.File]::ReadAllText("unitN.js")
   ([regex]'\{').Matches($c).Count -eq ([regex]'\}').Matches($c).Count
   ([regex]'`').Matches($c).Count % 2 -eq 0
   ```

7. **Commit + push** with a descriptive message:
   ```
   Unit N: expand with Module N content (X→Y cards, Z→W questions)
   ```

---

## 11. Workflow: Adding a Brand New Unit (Unit 13+)

1. Create `unitN.js` following the Section 3 pattern.
2. Add to `index.html`:
   ```html
   <script src="unitN.js"></script>
   ```
   between the existing unit scripts (order doesn't matter for functionality but keep numerical).
3. Add to the `unitMeta` array in `index.html`:
   ```js
   {id:N, title:"…", pages:"pp.XX–YY", locked:false}
   ```

---

## 12. Common Pitfalls Learned the Hard Way

| Pitfall | Fix |
|---|---|
| Copying old `var(--color-*)` CSS from Unit 6's original widget | Use only the new scheme (Section 9). |
| Modern-note index off-by-one after inserting a card | Renumber in descending order + update the comment block. |
| Adding emojis to every card | Don't. Follow Section 6. |
| Missing `zh-note` on a card | Add one — 1-2 sentence Chinese summary. |
| Long paragraphs of text | Split into a table or bullet list. Aim for scannability. |
| Backticks inside a template literal | Escape as `` \` `` or restructure. Common cause of syntax breaks. |
| Bloating `interactives.js` or `modern-notes.js` again | Everything goes into `unitN.js`. Those two files are minimal registries only. |
| Committing `_moduleN.txt` or `.claude/` | Already gitignored — leave it that way. |

---

## 13. Git Conventions

- Main branch is `main`. Push to it directly is fine (this is a personal study repo).
- Commit messages: short imperative title + optional body describing what/why.
- Never `git add .` — list files explicitly to avoid accidentally committing gitignored things.
- .gitignore is minimal and shouldn't need extension unless we add new build tooling.

Example commit for a typical unit update:

```
Unit 5: expand Static Testing (6→13 cards, add LMS Defect Hunter widget)

- Add Learning Objectives + 6 new example-driven cards
- Add 22 quiz questions (14 MC + 8 SA, including scenarios)
- Add 2 interactive widgets: LMS Defect Hunter + Review Technique Picker
- 6 modern notes (SonarQube, CodeQL, IDE linting, GitHub PR reviews)
```

Skip the `Co-Authored-By` footer unless the user asks for it — this is
their personal study repo, not a joint project.

---

## 14. Tone When Talking to the User

- User is **Chinese-speaking** — reply in Chinese by default.
- Content in the study guide stays **English + zh-note** (bilingual).
- User prefers **concise** explanations with concrete examples.
- User wants to **understand** what changed, not just be told "done."
  Give a short summary of what was added/changed after each work batch.
- User is **new to software testing** — link back to fundamentals when
  covering advanced topics (Boehm's Rule, 85% Rule, etc.).
- User has a good sense of style — trust their taste when they push
  back ("fewer emojis," "simpler widget," etc.). Update this file when
  they establish a new preference.

---

## 15. Quick Reference: Where Is X?

| I want to… | Look at… |
|---|---|
| See how a card should look | `unit4.js` (most polished) |
| See a multi-tab widget | `unit2.js`, `unit3.js`, `unit4.js`, `unit5.js` |
| See a "practice mode" widget | Unit 5's LMS Defect Hunter; Unit 3's Black Box Picker |
| See an animated widget | Unit 2's Sprint Animator; Unit 4's Bathtub Diagram |
| See how modern notes are written | Unit 4's notes (most examples) |
| See a scenario-based quiz question | Any `SCENARIO:` question in Units 1–7 |
| Understand the render pipeline | `index.html` (search `renderUnit`) |

---

## 16. Textbook + Course Alignment

- **Textbook:** Everett & McLeod (2007), *Software Testing*, John Wiley & Sons.
- Chapter 1 → Unit 1
- Chapter 2 → Unit 2
- Chapter 3+4 → Unit 3
- Chapter 5 → Unit 4
- Chapter 6 → Unit 5
- Chapter 7 → Unit 6
- Chapter 8 → Unit 7
- Chapter 9 → Unit 8
- Chapter 10 → Unit 9
- Chapter 11 → Unit 10
- Chapter 12 → Unit 11
- Chapter 13+14+15 → Unit 12
- **Course modules** (CPRG305): Module N maps to Unit N conceptually. Modules 1–7 have been integrated.

---

_Last updated: 2026-07 (after Unit 5-7 refactor + GitHub deployment)._
