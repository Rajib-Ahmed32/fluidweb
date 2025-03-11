"use client"

import { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import MainContent from "../components/MainContent"
import styles from "./demo.module.css"
import { ThemeProvider } from "../contexts/ThemeContext"

type LayoutType = "flex" | "grid" | "media"

export default function Demo() {
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>("flex")
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
  const [showLayouts, setShowLayouts] = useState(false)

  const handleToggleLayouts = () => {
    setShowLayouts(!showLayouts)
    if (!showLayouts) {
      setSelectedProperty(null)
    }
  }

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header
          selectedLayout={selectedLayout}
          onLayoutChange={setSelectedLayout}
          showLayouts={showLayouts}
          onToggleLayouts={handleToggleLayouts}
        />
        <div className={styles.content}>
          {!showLayouts && <Sidebar selectedLayout={selectedLayout} onPropertySelect={setSelectedProperty} />}
          <MainContent
            selectedLayout={selectedLayout}
            selectedProperty={selectedProperty}
            selectedPreset={selectedPreset}
            onPresetSelect={setSelectedPreset}
            showLayouts={showLayouts}
          />
        </div>
        <div className={styles.footer}>
          <p>Explore responsive design techniques and best practices</p>
        </div>
      </div>
    </ThemeProvider>
  )
}

