# Armchair Scene

A small, self-contained web art project that renders a cozy armchair scene in pure HTML, CSS, and JavaScript.

## Features

- Semantic HTML structure with accessible labels.
- CSS illustration of an armchair, child, cat, and decorative equalizer bars.
- Interactive **Play/Pause music animation** button that toggles equalizer motion.
- No build tools or dependencies required.

## Project Structure

- `index.html` — scene markup and accessible UI controls.
- `style.css` — all visual styling and animations.
- `script.js` — animation toggle logic and ARIA state updates.

## Getting Started

1. Clone the repository.
2. Open `index.html` directly in your browser.

That’s it — no install or build step is needed.

## Usage

- Click **Pause music animation** to pause the equalizer bars.
- Click **Play music animation** to resume animation.

## Accessibility Notes

- The main illustration is exposed as a labeled image region for assistive technologies.
- Toggle state is reflected with `aria-pressed` and a polite live region status message.
- Keyboard users can operate the toggle button normally.

## Browser Compatibility

Designed for modern browsers supporting:

- CSS custom properties
- CSS keyframe animations
- `:focus-visible`
- Standard DOM APIs (`querySelector`, `classList`, `addEventListener`)

## License

No license has been specified yet. Add a `LICENSE` file if you plan to distribute or reuse this project.
