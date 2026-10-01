# Static Foundations

## Project Goal

Build and publish an accessible, responsive static website that demonstrates strong HTML, CSS, and JavaScript fundamentals through real content and a thoughtful experience.

The project must meet the following requirements:

1. **Semantic structure:** Include at least three distinct content sections using semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`. There must be one `h1`, with a coherent heading hierarchy and no skipped levels.
2. **Flexbox and Grid:** Use both technologies for real layout work. For example, Flexbox for the navigation bar and Grid for a card gallery or the main page structure.
3. **Responsive design:** Avoid horizontal scrolling at 375 px and adapt the design meaningfully between phones and desktop screens using media queries or intrinsic patterns such as `auto-fit` with `minmax`.
4. **JavaScript interactivity:** Implement at least one functional interaction, such as a theme selector, menu filter, form validation, or tabs. The interaction must select elements, listen for an event, and modify the page.
5. **Real content:** Use authentic text and images relevant to the site's theme. Do not use `lorem ipsum` or stretched placeholder images.
6. **Netlify deployment:** Publish the site on Netlify and document the active public URL here.

**Published URL:** https://static-foundations.netlify.app/

## File Structure

- `index.html`: semantic structure and content.
- `css/styles.css`: styles, Flexbox, Grid, and responsive behavior.
- `js/script.js`: JavaScript interactions.

To test the project locally, run a static server from the root folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` in your browser. The published version is available at https://static-foundations.netlify.app/.
