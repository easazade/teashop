# AGENTS.md

Guidance for AI coding agents working on this practice project.

## Project context

- This is a practice online tea shop built to learn React + TypeScript.
- Keep changes simple, readable, and beginner-friendly.
- Prefer clear component structure over clever abstractions.

## Tech stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- ESLint + Prettier

## Useful commands

```bash
npm run dev       # start local dev server
npm run build     # type-check and build
npm run lint      # run ESLint
npm run format    # format files with Prettier
npm run preview   # preview production build
```

## Project layout

- `src/main.tsx` mounts the React app and router.
- `src/App.tsx` defines top-level routes.
- `src/pages/` contains page components.
- `src/components/` contains reusable UI components.
- `src/assets/` contains local image assets.
- `src/index.css` contains Tailwind imports, theme tokens, and global styles.
- `public/` contains static public assets.
- `dist/` is generated build output; do not edit it directly.

## Browser automation skill

Agents working on this project have access to the `playwright-browser` skill and may use it any time it would help complete a task.

This skill provides browser automation through Playwright from inside pi. It lets an agent:

- Open and navigate the local app or external webpages.
- Inspect rendered pages with snapshots and element references.
- Click buttons, fill inputs, select options, press keys, and test user flows.
- Take screenshots or PDFs for visual evidence.
- Check browser console messages, page errors, and network requests.
- Save and restore auth/browser state when needed.
- Run repeatable browser workflows for debugging, QA, or verification.

Use this skill freely for UI work, routing checks, form testing, visual verification, debugging layout issues, checking responsive behavior, inspecting runtime errors, or confirming that a change works in the browser. For local testing, first start or detect the dev server, then open the app and capture a snapshot before interacting with page elements.

Skill instructions are available at:

```text
/Users/alirezaeasazade/.pi/agent/npm/node_modules/pi-playwright/skills/playwright-browser/SKILL.md
```

Typical usage pattern:

```bash
SKILL_DIR=/Users/alirezaeasazade/.pi/agent/npm/node_modules/pi-playwright/skills/playwright-browser
ARTIFACT_DIR=$(node "$SKILL_DIR/scripts/artifact-dir.js")
node "$SKILL_DIR/scripts/detect-dev-servers.js"
node "$SKILL_DIR/scripts/pw.js" open http://localhost:5173
node "$SKILL_DIR/scripts/pw.js" snapshot --filename "$ARTIFACT_DIR/snapshot.md"
node "$SKILL_DIR/scripts/pw.js" screenshot --filename "$ARTIFACT_DIR/page.png" --full-page
```

## Coding guidelines

- Use function components and TypeScript.
- Keep components small and focused.
- Use existing components before creating new ones.
- Prefer descriptive prop and variable names.
- Match the existing style: single quotes, no semicolons, and `.tsx` imports where already used.
- Use Tailwind utility classes for styling unless a global theme/base rule belongs in `src/index.css`.
- Avoid adding unnecessary dependencies.
- Do not commit or edit generated files in `dist/`.

## Validation

Before finishing a meaningful change, run:

```bash
npm run lint
npm run build
```

If a command fails, report the failure and what would be needed to fix it.
