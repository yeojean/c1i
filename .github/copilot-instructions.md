<!-- Copilot / AI agent instructions for the c1i static site collection -->
# Repo snapshot

This repository is a small static-site collection of HTML and CSS files used for short "entries" and exercises.

- Root files: `index.html`, `README.md`
- Entry directories: `Entry 5/`, `Harmonic Collection/` (contains multiple `Entry N/` folders)

Primary patterns:

- Simple static HTML files (no build system, server, or JS framework present).
- Each entry folder typically contains an `index.html` and occasionally `style.css`.
- Images or external embeds are referenced by absolute URLs inside the HTML.

## What to do when editing code

- Preserve the static-site structure. Add new entries by creating a new folder `Entry X/` containing `index.html` and, if needed, `style.css`.
- Keep relative paths simple (e.g., `style.css` in the same folder or use root-relative `/path` when intentionally referencing root assets).
- Avoid introducing JS frameworks, build scripts, or package manifests unless the change explicitly requires them and you add a short README explaining why.

## Files and locations worth checking

- Root `index.html` — homepage for the collection.
- `Harmonic Collection/` — contains multiple sub-entries and a `style.css` used by some entries.
- Example entry: `Harmonic Collection/Entry 2/index.html` — follow this pattern for new entries.

## Style and content conventions

- HTML: Minimal, semantic structure. Keep DOCTYPE, language and meta tags as in existing files.
- CSS: Scoped per-entry when present. Prefer adding per-entry `style.css` rather than a single global stylesheet unless intentionally centralizing styles.
- Images: Use external URLs as necessary; if adding local assets, place them in the same entry folder and reference relatively.

## Developer workflows (what I could discover)

- No build/test commands or dev server found. Treat this as a purely static site served by any static host or opened directly in a browser.
- To preview: open the `index.html` (or any entry `index.html`) in a browser. If cross-file linking is added, run a local static server (example: `python -m http.server` in the repository root).

## Guidance for automated edits by Copilot/AI agents

- Make minimal, incremental edits. These files are typically hand-crafted; avoid heavy restructuring.
- When adding files, mirror existing naming and folder conventions (e.g., `Entry 6/index.html`).
- If adding CSS, scope styles to the entry (use a top-level wrapper class) to avoid accidental global overrides.
- If you add a build system or dependencies, include a clear migration note in `README.md` and add a minimal `package.json` or other manifest.

## Examples from this repo

- Homepage snippet (root `index.html`): contains <head> meta and a simple body with headings and an image embed.
- Entry example: `Harmonic Collection/Entry 3/index.html` — small pages with local `style.css` in the same folder.

## When to ask the human

- If a change requires adding tooling (npm, bundlers, linters) or migrating many files, ask for explicit permission before proceeding.
- If content needs restructuring across many entries (moving assets to a shared folder), propose a plan and get confirmation.

---

If anything in this summary is unclear or you'd like me to include build/test commands (e.g., a recommended local preview script), tell me what environment you prefer and I'll add it.
