import styles from "./Sidebar.module.css"

type LayoutType = "flex" | "grid" | "media"

interface SidebarProps {
  selectedLayout: LayoutType
  onPropertySelect: (property: string) => void
}

const flexProperties = [
  "Card Layout",
  "flex-direction",
  "justify-content",
  "align-items",
  "flex-wrap",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
]

const gridProperties = [
  "grid-template-columns",
  "grid-template-rows",
  "grid-gap",
  "grid-auto-flow",
  "justify-items",
  "align-items",
]

const mediaQueryProperties = ["max-width", "min-width", "orientation", "aspect-ratio", "resolution", "color"]

export default function Sidebar({ selectedLayout, onPropertySelect }: SidebarProps) {
  const properties =
    selectedLayout === "flex" ? flexProperties : selectedLayout === "grid" ? gridProperties : mediaQueryProperties

  return (
    <aside className={styles.sidebar}>
      <h2>{selectedLayout.charAt(0).toUpperCase() + selectedLayout.slice(1)} Properties</h2>
      <ul>
        {properties.map((prop) => (
          <li key={prop}>
            <button onClick={() => onPropertySelect(prop)}>{prop}</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

