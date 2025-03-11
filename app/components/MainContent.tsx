"use client"

import { useState, useEffect } from "react"
import { Copy, Save } from "lucide-react"
import styles from "./MainContent.module.css"
import { CodeEditor } from "./CodeEditor"
import VisualExample from "./VisualExample"

type LayoutType = "flex" | "grid" | "media"

interface MainContentProps {
  selectedLayout: LayoutType
  selectedProperty: string | null
  selectedPreset: string | null
  onPresetSelect: (preset: string) => void
  showLayouts: boolean
}

const presetLayouts = {
  flex: {
    "Holy Grail": {
      description: "A classic layout with header, footer, and three columns.",
      html: `
<div class="holy-grail-layout">
  <header>Header</header>
  <div class="holy-grail-body">
    <nav>Navigation</nav>
    <main>Main Content</main>
    <aside>Sidebar</aside>
  </div>
  <footer>Footer</footer>
</div>
      `,
      css: `
.holy-grail-layout {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.holy-grail-layout header,
.holy-grail-layout footer {
  background-color: var(--secondary-background);
  padding: 1rem;
}

.holy-grail-body {
  display: flex;
  flex: 1;
}

.holy-grail-body nav,
.holy-grail-body aside {
  background-color: var(--card-background);
  padding: 1rem;
  width: 150px;
}

.holy-grail-body main {
  flex: 1;
  padding: 1rem;
  background-color: var(--background-color);
}
      `,
    },
    "Card Layout": {
      description: "A responsive card layout using flexbox.",
      html: `
<div class="card-layout">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
      `,
      css: `
.card-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.card {
  flex: 1 1 200px;
  max-width: 250px;
  background-color: var(--secondary-background);
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}
      `,
    },
    "Centered Content": {
      description: "A layout with vertically and horizontally centered content.",
      html: `
<div class="centered-content">
  <div class="content">
    <h2>Centered Content</h2>
    <p>This content is centered both vertically and horizontally.</p>
  </div>
</div>
      `,
      css: `
.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: var(--background-color);
}

.content {
  text-align: center;
  padding: 2rem;
  background-color: var(--secondary-background);
  border-radius: 4px;
  max-width: 80%;
}
      `,
    },
    "Sticky Footer": {
      description: "A layout with a footer that sticks to the bottom of the page.",
      html: `
<div class="sticky-footer-layout">
  <header>Header</header>
  <main>Main Content</main>
  <footer>Footer</footer>
</div>
      `,
      css: `
.sticky-footer-layout {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.sticky-footer-layout header,
.sticky-footer-layout footer {
  background-color: var(--secondary-background);
  padding: 1rem;
}

.sticky-footer-layout main {
  flex: 1;
  padding: 1rem;
  background-color: var(--background-color);
}
      `,
    },
    "Masonry Layout": {
      description: "A Pinterest-style masonry layout using flexbox.",
      html: `
<div class="masonry-layout">
  <div class="masonry-item">Item 1</div>
  <div class="masonry-item">Item 2</div>
  <div class="masonry-item">Item 3</div>
  <div class="masonry-item">Item 4</div>
  <div class="masonry-item">Item 5</div>
  <div class="masonry-item">Item 6</div>
</div>
      `,
      css: `
.masonry-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.masonry-item {
  flex: 1 0 calc(33.333% - 1rem);
  background-color: var(--secondary-background);
  padding: 1rem;
  min-height: 100px;
}

.masonry-item:nth-child(2n) {
  min-height: 150px;
}

.masonry-item:nth-child(3n) {
  min-height: 200px;
}
      `,
    },
    "Navbar with Dropdown": {
      description: "A responsive navbar with a dropdown menu using flexbox.",
      html: `
<nav class="navbar">
  <div class="brand">Brand</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li class="dropdown">
      <a href="#" class="dropbtn">Services</a>
      <div class="dropdown-content">
        <a href="#">Service 1</a>
        <a href="#">Service 2</a>
        <a href="#">Service 3</a>
      </div>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
      `,
      css: `
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary-background);
  padding: 1rem;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 1rem;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--card-background);
  min-width: 120px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  display: block;
  padding: 0.5rem;
}

.dropdown:hover .dropdown-content {
  display: block;
}
      `,
    },
  },
  grid: {
    "Grid Gallery": {
      description: "A responsive image gallery using CSS Grid.",
      html: `
<div class="grid-gallery">
  <div class="gallery-item">1</div>
  <div class="gallery-item">2</div>
  <div class="gallery-item">3</div>
  <div class="gallery-item">4</div>
  <div class="gallery-item">5</div>
  <div class="gallery-item">6</div>
</div>
      `,
      css: `
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: var(--background-color);
}

.gallery-item {
  background-color: var(--secondary-background);
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}
      `,
    },
    "Dashboard Layout": {
      description: "A complex dashboard layout using CSS Grid.",
      html: `
<div class="dashboard-layout">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>
      `,
      css: `
.dashboard-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav main"
    "nav sidebar"
    "footer footer";
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto 1fr auto auto;
  min-height: 400px;
}

.dashboard-layout > * {
  padding: 1rem;
}

.dashboard-layout header { grid-area: header; background-color: var(--secondary-background); }
.dashboard-layout nav { grid-area: nav; background-color: var(--card-background); }
.dashboard-layout main { grid-area: main; background-color: var(--background-color); }
.dashboard-layout aside { grid-area: sidebar; background-color: var(--card-background); }
.dashboard-layout footer { grid-area: footer; background-color: var(--secondary-background); }
      `,
    },
    "Magazine Layout": {
      description: "A magazine-style layout using CSS Grid.",
      html: `
<div class="magazine-layout">
  <header>Header</header>
  <article>Main Article</article>
  <aside>Sidebar</aside>
  <section class="featured">Featured Content</section>
  <section class="secondary">Secondary Content</section>
  <footer>Footer</footer>
</div>
      `,
      css: `
.magazine-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "article article sidebar"
    "featured featured sidebar"
    "secondary secondary secondary"
    "footer footer footer";
  grid-template-columns: 1fr 1fr 200px;
  gap: 1rem;
  min-height: 400px;
}

.magazine-layout > * {
  padding: 1rem;
  background-color: var(--secondary-background);
}

.magazine-layout header { grid-area: header; }
.magazine-layout article { grid-area: article; background-color: var(--card-background); }
.magazine-layout aside { grid-area: sidebar; background-color: var(--card-background); }
.magazine-layout .featured { grid-area: featured; }
.magazine-layout .secondary { grid-area: secondary; background-color: var(--background-color); }
.magazine-layout footer { grid-area: footer; }
      `,
    },
    "Grid Mosaic": {
      description: "A mosaic-style layout using CSS Grid.",
      html: `
<div class="grid-mosaic">
  <div class="mosaic-item item1">1</div>
  <div class="mosaic-item item2">2</div>
  <div class="mosaic-item item3">3</div>
  <div class="mosaic-item item4">4</div>
  <div class="mosaic-item item5">5</div>
  <div class="mosaic-item item6">6</div>
</div>
      `,
      css: `
.grid-mosaic {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1rem;
  padding: 1rem;
  background-color: var(--background-color);
}

.mosaic-item {
  background-color: var(--secondary-background);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}

.item1 { grid-area: 1 / 1 / 3 / 3; }
.item2 { grid-area: 1 / 3 / 2 / 5; }
.item3 { grid-area: 2 / 3 / 4 / 5; }
.item4 { grid-area: 3 / 1 / 4 / 2; }
.item5 { grid-area: 3 / 2 / 4 / 3; }
      `,
    },
    "Grid Card Layout": {
      description: "A responsive card layout using CSS Grid.",
      html: `
<div class="grid-card-layout">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
      `,
      css: `
.grid-card-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: var(--background-color);
}

.card {
  background-color: var(--secondary-background);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
}
      `,
    },
    "Grid Holy Grail": {
      description: "A 'Holy Grail' layout implemented with CSS Grid.",
      html: `
<div class="grid-holy-grail">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>
      `,
      css: `
.grid-holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  min-height: 400px;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--background-color);
}

.grid-holy-grail > * {
  padding: 1rem;
  background-color: var(--secondary-background);
}

.grid-holy-grail header { grid-area: header; }
.grid-holy-grail nav { grid-area: nav; }
.grid-holy-grail main { grid-area: main; }
.grid-holy-grail aside { grid-area: aside; }
.grid-holy-grail footer { grid-area: footer; }
      `,
    },
  },
  media: {
    "Mobile First": {
      description: "A mobile-first responsive layout.",
      html: `
<div class="mobile-first-layout">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>
      `,
      css: `
.mobile-first-layout {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.mobile-first-layout > * {
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: var(--secondary-background);
}

@media (min-width: 768px) {
  .mobile-first-layout {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .mobile-first-layout header,
  .mobile-first-layout footer {
    width: 100%;
  }

  .mobile-first-layout nav,
  .mobile-first-layout aside {
    flex: 1;
  }

  .mobile-first-layout main {
    flex: 2;
  }
}
      `,
    },
    "Desktop First": {
      description: "A desktop-first responsive layout.",
      html: `
<div class="desktop-first-layout">
  <header>Header</header>
  <div class="content">
    <main>Main Content</main>
    <aside>Sidebar</aside>
  </div>
  <footer>Footer</footer>
</div>
      `,
      css: `
.desktop-first-layout {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.desktop-first-layout > * {
  padding: 1rem;
}

.desktop-first-layout header,
.desktop-first-layout footer {
  background-color: var(--secondary-background);
}

.desktop-first-layout .content {
  display: flex;
  flex: 1;
}

.desktop-first-layout main {
  flex: 3;
  background-color: var(--background-color);
}

.desktop-first-layout aside {
  flex: 1;
  background-color: var(--card-background);
}

@media (max-width: 768px) {
  .desktop-first-layout .content {
    flex-direction: column;
  }

  .desktop-first-layout aside {
    order: -1;
  }
}
      `,
    },
    "Print Friendly": {
      description: "A layout optimized for both screen and print.",
      html: `
<div class="print-friendly-layout">
  <header>
    <h2>Print Friendly Layout</h2>
  </header>
  <main>
    <article>
      <h3>Main Article</h3>
      <p>This is the main content of the page.</p>
    </article>
  </main>
  <footer>
    <p>Page 1 of 1</p>
  </footer>
</div>
      `,
      css: `
.print-friendly-layout {
  font-family: serif;
  line-height: 1.5;
  padding: 1rem;
  background-color: white;
  color: black;
  min-height: 400px;
}

.print-friendly-layout header,
.print-friendly-layout footer {
  text-align: center;
  margin: 1rem 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
}

.print-friendly-layout main {
  margin: 1rem 0;
}

@media print {
  .print-friendly-layout {
    font-size: 12pt;
  }
}

@media screen {
  .print-friendly-layout {
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
}
      `,
    },
    "Responsive Image Gallery": {
      description: "A responsive image gallery with different layouts for various screen sizes.",
      html: `
<div class="responsive-gallery">
  <div class="gallery-item">Image 1</div>
  <div class="gallery-item">Image 2</div>
  <div class="gallery-item">Image 3</div>
  <div class="gallery-item">Image 4</div>
  <div class="gallery-item">Image 5</div>
  <div class="gallery-item">Image 6</div>
</div>
      `,
      css: `
.responsive-gallery {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--background-color);
}

.gallery-item {
  background-color: var(--secondary-background);
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
}

@media (min-width: 600px) {
  .responsive-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .responsive-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .responsive-gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
      `,
    },
    "Responsive Navbar": {
      description: "A responsive navbar that transforms into a hamburger menu on smaller screens.",
      html: `
<nav class="responsive-navbar">
  <div class="brand">Brand</div>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <label for="nav-toggle" class="nav-toggle-label">
    <span></span>
  </label>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
      `,
      css: `
.responsive-navbar {
  background-color: var(--secondary-background);
  padding: 1rem;
  position: relative;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-toggle {
  display: none;
}

.nav-toggle-label {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
  display: block;
  background: white;
  height: 2px;
  width: 2rem;
  position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
  content: '';
  position: absolute;
}

.nav-toggle-label span::before {
  bottom: 7px;
}

.nav-toggle-label span::after {
  top: 7px;
}

.nav-links {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-links li {
  margin-left: 1rem;
}

@media screen and (max-width: 768px) {
  .nav-toggle-label {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--secondary-background);
    display: none;
    flex-direction: column;
    padding: 1rem;
  }

  .nav-links li {
    margin: 0.5rem 0;
  }

  .nav-toggle:checked ~ .nav-links {
    display: flex;
  }
}
      `,
    },
    "Responsive Grid-Flex Hybrid": {
      description: "A layout that combines grid and flexbox, adapting to different screen sizes.",
      html: `
<div class="hybrid-layout">
  <header>Header</header>
  <div class="content">
    <main>Main Content</main>
    <aside>Sidebar</aside>
  </div>
  <footer>Footer</footer>
</div>
      `,
      css: `
.hybrid-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 400px;
  background-color: var(--background-color);
}

.hybrid-layout > * {
  padding: 1rem;
}

header, footer {
  background-color: var(--secondary-background);
}

.content {
  display: flex;
  flex-wrap: wrap;
}

main {
  flex: 2;
  min-width: 60%;
  background-color: var(--card-background);
}

aside {
  flex: 1;
  min-width: 200px;
  background-color: var(--card-background);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  aside {
    order: -1;
  }
}
      `,
    },
  },
}

export default function MainContent({
  selectedLayout,
  selectedProperty,
  selectedPreset,
  onPresetSelect,
  showLayouts,
}: MainContentProps) {
  const [htmlCode, setHtmlCode] = useState("")
  const [cssCode, setCssCode] = useState("")
  const [showHtmlCode, setShowHtmlCode] = useState(false)
  const [showCssCode, setShowCssCode] = useState(false)
  const [customLayouts, setCustomLayouts] = useState<Record<LayoutType, { html: string; css: string }>>(() => {
    if (typeof window !== "undefined") {
      const savedLayouts = localStorage.getItem("customLayouts")
      return savedLayouts
        ? JSON.parse(savedLayouts)
        : {
            flex: { html: "", css: "" },
            grid: { html: "", css: "" },
            media: { html: "", css: "" },
          }
    }
    return {
      flex: { html: "", css: "" },
      grid: { html: "", css: "" },
      media: { html: "", css: "" },
    }
  })

  useEffect(() => {
    if (selectedPreset === "Custom Layout") {
      setHtmlCode(customLayouts[selectedLayout].html)
      setCssCode(customLayouts[selectedLayout].css)
    } else if (selectedPreset && presetLayouts[selectedLayout]?.[selectedPreset]) {
      setHtmlCode(presetLayouts[selectedLayout][selectedPreset].html.trim())
      setCssCode(presetLayouts[selectedLayout][selectedPreset].css.trim())
    } else {
      setHtmlCode("")
      setCssCode("")
    }
  }, [selectedLayout, selectedPreset, customLayouts])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied to clipboard!")
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  const saveCustomLayout = () => {
    const updatedCustomLayouts = {
      ...customLayouts,
      [selectedLayout]: { html: htmlCode, css: cssCode },
    }
    setCustomLayouts(updatedCustomLayouts)
    localStorage.setItem("customLayouts", JSON.stringify(updatedCustomLayouts))
    alert("Custom layout saved!")
  }

  const handleHtmlSave = (newHtmlCode: string) => {
    setHtmlCode(newHtmlCode)
    if (selectedPreset === "Custom Layout") {
      setCustomLayouts((prev) => ({
        ...prev,
        [selectedLayout]: { ...prev[selectedLayout], html: newHtmlCode },
      }))
    }
  }

  const handleCssSave = (newCssCode: string) => {
    setCssCode(newCssCode)
    if (selectedPreset === "Custom Layout") {
      setCustomLayouts((prev) => ({
        ...prev,
        [selectedLayout]: { ...prev[selectedLayout], css: newCssCode },
      }))
    }
  }

  return (
    <main className={styles.mainContent}>
      <h2>{selectedLayout.charAt(0).toUpperCase() + selectedLayout.slice(1)} Layouts</h2>
      {!showLayouts && selectedProperty && (
        <div className={styles.visualExample}>
          <h3>Visual Example: {selectedProperty}</h3>
          <VisualExample layout={selectedProperty} />
        </div>
      )}
      {showLayouts && (
        <div className={styles.layoutGrid}>
          {Object.entries(presetLayouts[selectedLayout] || {}).map(([name, layout]) => (
            <div
              key={name}
              className={`${styles.layoutOption} ${selectedPreset === name ? styles.selected : ""}`}
              onClick={() => onPresetSelect(name)}
            >
              <h3>{name}</h3>
              <p>{layout.description}</p>
            </div>
          ))}
          <div
            className={`${styles.layoutOption} ${selectedPreset === "Custom Layout" ? styles.selected : ""}`}
            onClick={() => onPresetSelect("Custom Layout")}
          >
            <h3>Custom Layout</h3>
            <p>Create and save your own custom layout</p>
          </div>
        </div>
      )}
      {selectedPreset && (
        <div className={styles.selectedLayout}>
          <h3>{selectedPreset}</h3>
          {selectedPreset === "Custom Layout" ? (
            <div className={styles.customLayoutInputs}>
              <div>
                <h4>HTML</h4>
                <CodeEditor code={htmlCode} language="html" onSave={handleHtmlSave} />
              </div>
              <div>
                <h4>CSS</h4>
                <CodeEditor code={cssCode} language="css" onSave={handleCssSave} />
              </div>
              <button onClick={saveCustomLayout} className={styles.saveButton}>
                <Save size={16} /> Save Custom Layout
              </button>
            </div>
          ) : (
            <>
              {presetLayouts[selectedLayout]?.[selectedPreset] && (
                <p>{presetLayouts[selectedLayout][selectedPreset].description}</p>
              )}
              <div className={styles.demoContainer}>
                <div className={styles.layoutDemo}>
                  <style dangerouslySetInnerHTML={{ __html: cssCode }} />
                  <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
                </div>
              </div>
              <div className={styles.codeToggle}>
                <button onClick={() => setShowHtmlCode(!showHtmlCode)}>
                  {showHtmlCode ? "Hide HTML" : "Show HTML"}
                </button>
                <button onClick={() => setShowCssCode(!showCssCode)}>{showCssCode ? "Hide CSS" : "Show CSS"}</button>
              </div>
              {showHtmlCode && (
                <div className={styles.codeContainer}>
                  <h3>HTML Code:</h3>
                  <CodeEditor code={htmlCode} language="html" onSave={handleHtmlSave} />
                  <button onClick={() => copyToClipboard(htmlCode)} className={styles.copyButton}>
                    <Copy size={16} /> Copy HTML
                  </button>
                </div>
              )}
              {showCssCode && (
                <div className={styles.codeContainer}>
                  <h3>CSS Code:</h3>
                  <CodeEditor code={cssCode} language="css" onSave={handleCssSave} />
                  <button onClick={() => copyToClipboard(cssCode)} className={styles.copyButton}>
                    <Copy size={16} /> Copy CSS
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </main>
  )
}

