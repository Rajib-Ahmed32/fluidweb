import Designs from "../components/Designs"
import Header from "../components/Header"
import { ThemeProvider } from "../contexts/ThemeContext"

export default function DesignsPage() {
  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <Designs />
      </div>
    </ThemeProvider>
  )
}

