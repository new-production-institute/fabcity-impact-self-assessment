# Fab City Full Stack Self-Assessment

A small, dependency-free web tool for cities and regions to assess themselves against the seven layers of the Fab City Full Stack.

- Rate each layer on a maturity scale from 0 to 4.
- Rate three cross-cutting lenses (Equity & Inclusion, Decentralized Governance, Digital–Physical Integration) from 0 to 3, once each for the city / region as a whole.
- See the result as a radar chart.
- Get the description of the next level for each layer and lens as a starting point for discussion.
- Export the chart (PNG, SVG) and the results (CSV, JSON), print to PDF, or copy a share link.

There is no backend. Answers are stored in the visitor's own browser (localStorage) and are only passed on if they use the share link or an export.

## Files

| File | Purpose |
|---|---|
| `index.html` | The tool: layout, styles and logic |
| `framework.js` | All content: layers, level descriptions, lenses |
| `assets/fonts/` | Self-hosted Poppins font files (SIL Open Font License, see `LICENSE.txt` there) |
| `README.md` | This file |

## Publish with GitHub Pages

1. Create a new public repository on GitHub and upload all files and the `assets` folder to its root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two the tool is available at `https://<your-username>.github.io/<repository-name>/`.

To try it locally, open `index.html` in a browser. No build step, no server.

## Design

The look follows the New Production Institute's Technology Product Portfolio site: Poppins, black on white, one amber accent (`#fcb900`) used as a highlight bar, and the hexagon mark. Colours are defined as CSS variables at the top of `index.html`. Poppins is served from this repository, so no request goes to a font service.

## Change the content

Edit `framework.js`:

- **Wording** of layers, level descriptions and lens questions: change the texts in place. Each layer needs exactly five level texts (0 to 4), each lens four (0 to 3).
- **Adding or removing a layer** works too; the chart adapts. Share links created before the change will no longer match.

## License

No license has been chosen yet. Add a `LICENSE` file before inviting reuse.
