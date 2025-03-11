import type React from "react"
import styles from "./Modal.module.css"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  link: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, link }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.readMoreLink}>
          Read Full Article
        </a>
      </div>
    </div>
  )
}

export default Modal

