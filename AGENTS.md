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
