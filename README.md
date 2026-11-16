# Fab City Full Stack Self-Assessment

A small, dependency-free web tool for fab cities and regions. It uses the Fab City Full Stack as its conceptual foundation and asks one question per layer: which of five maturity levels (0–4) describes us best today?

## Background

The tool was developed in work package 4.3 "Impact" of the research project "Fab City – Decentralized Digital Production for Urban Value Creation" at the New Production Institute, Helmut Schmidt University Hamburg.

The work package developed a multi-scale approach for surveying the current state of Fab Cities. A systematic review of quantitative impact research on Fab Labs showed that the evidence is strong for learning, skills and entrepreneurship, and almost absent for the bioregional, place-based and knowledge-sharing layers of the Full Stack. The self-assessment complements such measurement: it lets a city or region describe its own state on every layer, including those for which hardly any indicators exist yet.

The assessment matrix was tested with practitioners in the workshop "Measuring What Matters. Rethinking Impact and Sustainability in Fab Labs and Fab Cities" at Fab25 (Brno & Prague, 2025). This repository turns the matrix into a web tool.

The result is a profile across all seven layers, shown as a radar chart. It is meant as a starting point for discussion among local actors (labs, administration, research, civil society), not as a ranking or an external evaluation.

## What you assess

### Seven Full Stack layers, each on five described maturity levels (0–4):

- Accessibility of technologies and infrastructures
- New Forms of Learning
- Value-Generating Projects
- Collaboration and local ecosystems
- Place-based prototyping
- Bioregional strategies
- Global knowledge sharing

### Three cross-cutting lenses, each rated once for the city or region as a whole, on four described levels (0–3):

- Equity & Inclusion
- Decentralized Governance
- Digital–Physical Integration

The lens questions were part of the tested matrix; the level descriptions for the lenses were written for this web version.

## What you get
A radar chart of your profile across the seven layers, plus your lens ratings.
For every layer and lens you rated, the description of the next level up, as a prompt for discussion.
Export of the chart (PNG, SVG) and the results (CSV, JSON), print to PDF, or a share link that reproduces your answers.

There is no backend. Answers are stored in the visitor's own browser (localStorage) and are only passed on if they use the share link or an export.

## Known limitations
The result is a self-description. It reflects the view of the person or group filling in the form and is not comparable across cities without further calibration.
Participants of the Fab25 workshop identified gaps in the Full Stack itself, which this tool inherits: arts and culture and human impact are missing, Fab Regions are underrepresented, repair and reuse have no clear place, and "value" (layer 3), "place-based" (layer 5) and "bioregion" (layer 6) need clearer definitions.

## Info on this repository
### Files

| File | Purpose |
|---|---|
| `index.html` | The tool: layout, styles and logic |
| `framework.js` | All content: layers, level descriptions, lenses |
| `assets/fonts/` | Self-hosted Poppins font files (SIL Open Font License, see `LICENSE.txt` there) |
| `README.md` | This file |

### Design

The look follows the New Production Institute's Technology Product Portfolio site: Poppins, black on white, one amber accent (`#fcb900`) used as a highlight bar, and the hexagon mark. Colours are defined as CSS variables at the top of `index.html`. Poppins is served from this repository, so no request goes to a font service.

### Change the content

Edit `framework.js`:

- **Wording** of layers, level descriptions and lens questions: change the texts in place. Each layer needs exactly five level texts (0 to 4), each lens four (0 to 3).
- **Adding or removing a layer** works too; the chart adapts. Share links created before the change will no longer match.

## Authors and acknowledgements
Victoria Wenzelmann and Dr. Jan Peuckert, New Production Institute, Helmut Schmidt University Hamburg

The Fab25 workshop in which the matrix was tested was conceived and facilitated together with Cindy Kohtala (Umeå University), Adriana Cabrera (CSCP / Fab City Collective) and Pieter van der Hijden.

## Related publication

Peuckert, J., Wenzelmann, V., & Rüdebusch, G. (2025). Measuring the Impacts of Fab Labs: A Review of Quantitative Research and Evidence. Fab25 Czechia – Bridge the Gap, Brno & Prague. https://doi.org/10.5281/zenodo.16211909

## Funding

"Fab City – Decentralized Digital Production for Urban Value Creation" is funded by dtec.bw and supported by the European Union – NextGenerationEU.

## License

No license has been chosen yet. Add a `LICENSE` file before inviting reuse.
