"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Header.module.css"
import { useTheme } from "../contexts/ThemeContext"
import { Moon, Sun, Layout, Menu, X } from "lucide-react"

type LayoutType = "flex" | "grid" | "media"

interface HeaderProps {
  selectedLayout?: LayoutType
  onLayoutChange?: (layout: LayoutType) => void
  showLayouts?: boolean
  onToggleLayouts?: () => void
}

export default function Header({ selectedLayout, onLayoutChange, showLayouts, onToggleLayouts }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <h1>Responsive Design Demo</h1>
        </Link>
        {isMobile && (
          <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        <nav className={`${styles.nav} ${isMobile && mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
          {pathname === "/demo" && (
            <>
              <button
                className={selectedLayout === "flex" ? styles.active : ""}
                onClick={() => {
                  onLayoutChange && onLayoutChange("flex")
                  setMobileMenuOpen(false)
                }}
              >
                Flex
              </button>
              <button
                className={selectedLayout === "grid" ? styles.active : ""}
                onClick={() => {
                  onLayoutChange && onLayoutChange("grid")
                  setMobileMenuOpen(false)
                }}
              >
                Grid
              </button>
              <button
                className={selectedLayout === "media" ? styles.active : ""}
                onClick={() => {
                  onLayoutChange && onLayoutChange("media")
                  setMobileMenuOpen(false)
                }}
              >
                Media Query
              </button>
              <button
                onClick={() => {
                  onToggleLayouts && onToggleLayouts()
                  setMobileMenuOpen(false)
                }}
                className={showLayouts ? styles.active : ""}
              >
                <Layout size={20} />
                <span className={styles.buttonText}>Layouts</span>
              </button>
            </>
          )}
          {pathname === "/" && (
            <Link href="/demo" className={styles.demoLink}>
              Try Demo
            </Link>
          )}
          <button
            onClick={() => {
              toggleTheme()
              setMobileMenuOpen(false)
            }}
            className={styles.themeToggle}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

