"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styles from "./AlertPopup.module.css"

interface AlertPopupProps {
  message: string
  duration?: number
  onClose: () => void
}

const AlertPopup: React.FC<AlertPopupProps> = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className={styles.alertOverlay}>
      <div className={styles.alertContent}>
        <p>{message}</p>
        <button onClick={() => setIsVisible(false)} className={styles.closeButton}>
          ×
        </button>
      </div>
    </div>
  )
}

export default AlertPopup

