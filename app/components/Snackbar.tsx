"use client"

import { useEffect, useState } from "react"
import styles from "./Snackbar.module.css"

interface SnackbarProps {
  message: string
}

const Snackbar: React.FC<SnackbarProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return <div className={styles.snackbar}>{message}</div>
}

export default Snackbar

