import type React from "react"
import styles from "./VisualExample.module.css"

interface VisualExampleProps {
  layout: string
}

const VisualExample: React.FC<VisualExampleProps> = ({ layout }) => {
  switch (layout) {
    case "Card Layout":
      return (
        <div className={styles.cardLayout}>
          <div className={styles.card}>Card 1</div>
          <div className={styles.card}>Card 2</div>
          <div className={styles.card}>Card 3</div>
          <div className={styles.card}>Card 4</div>
        </div>
      )
    case "flex-direction":
      return (
        <div className={styles.flexExample}>
          <h4>Row (default)</h4>
          <div className={`${styles.flexContainer} ${styles.flexRow}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Column</h4>
          <div className={`${styles.flexContainer} ${styles.flexColumn}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
        </div>
      )
    case "justify-content":
      return (
        <div className={styles.flexExample}>
          <h4>Flex-start (default)</h4>
          <div className={`${styles.flexContainer} ${styles.justifyStart}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Center</h4>
          <div className={`${styles.flexContainer} ${styles.justifyCenter}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Flex-end</h4>
          <div className={`${styles.flexContainer} ${styles.justifyEnd}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Space-between</h4>
          <div className={`${styles.flexContainer} ${styles.justifySpaceBetween}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Space-around</h4>
          <div className={`${styles.flexContainer} ${styles.justifySpaceAround}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
        </div>
      )
    case "align-items":
      return (
        <div className={styles.flexExample}>
          <h4>Stretch (default)</h4>
          <div className={`${styles.flexContainer} ${styles.alignStretch}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Flex-start</h4>
          <div className={`${styles.flexContainer} ${styles.alignStart}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Center</h4>
          <div className={`${styles.flexContainer} ${styles.alignCenter}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>Flex-end</h4>
          <div className={`${styles.flexContainer} ${styles.alignEnd}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
        </div>
      )
    case "flex-wrap":
      return (
        <div className={styles.flexExample}>
          <h4>No wrap (default)</h4>
          <div className={`${styles.flexContainer} ${styles.flexNoWrap}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
            <div className={styles.flexItem}>4</div>
            <div className={styles.flexItem}>5</div>
          </div>
          <h4>Wrap</h4>
          <div className={`${styles.flexContainer} ${styles.flexWrap}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
            <div className={styles.flexItem}>4</div>
            <div className={styles.flexItem}>5</div>
          </div>
        </div>
      )
    case "flex-grow":
      return (
        <div className={styles.flexExample}>
          <h4>Default (no grow)</h4>
          <div className={`${styles.flexContainer} ${styles.flexNoGrow}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
          <h4>With flex-grow</h4>
          <div className={`${styles.flexContainer} ${styles.flexGrow}`}>
            <div className={styles.flexItem}>1</div>
            <div className={styles.flexItem}>2</div>
            <div className={styles.flexItem}>3</div>
          </div>
        </div>
      )
    default:
      return <div>No visual example available for {layout}</div>
  }
}

export default VisualExample

