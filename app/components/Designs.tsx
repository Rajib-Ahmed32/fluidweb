"use client"

import { useState } from "react"
import { Copy, Code } from "lucide-react"
import styles from "./Designs.module.css"
import Snackbar from "./Snackbar" // Import the Snackbar component

interface Design {
  name: string
  description: string
  html: string
  css: string
}

const designs: Design[] = [
  {
    name: "Modern Login",
    description: "A sleek and modern login page with a gradient background",
    html: `
<div class="login-container">
  <form class="login-form">
    <h2>Welcome Back</h2>
    <div class="input-group">
      <input type="email" id="email" required>
      <label for="email">Email</label>
    </div>
    <div class="input-group">
      <input type="password" id="password" required>
      <label for="password">Password</label>
    </div>
    <button type="submit">Log In</button>
    <div class="links">
      <a href="#">Forgot Password?</a>
      <a href="#">Sign Up</a>
    </div>
  </form>
</div>
    `,
    css: `
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.input-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.input-group input {
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  color: #333;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  background: transparent;
  transition: border-color 0.2s;
}

.input-group label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 1rem;
  color: #666;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-group input:focus ~ label,
.input-group input:valid ~ label {
  top: -20px;
  font-size: 0.8rem;
  color: #2575fc;
}

button {
  width: 100%;
  padding: 10px;
  background: #2575fc;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #1a5fcc;
}

.links {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.links a {
  color: #2575fc;
  text-decoration: none;
  font-size: 0.9rem;
}

.links a:hover {
  text-decoration: underline;
}
    `,
  },
  {
    name: "Elegant Hero",
    description: "An elegant hero section with a background image and overlay",
    html: `
<section class="hero">
  <div class="hero-content">
    <h1>Welcome to Our World</h1>
    <p>Discover amazing experiences and unforgettable moments</p>
    <a href="#" class="cta-button">Get Started</a>
  </div>
</section>
    `,
    css: `
.hero {
  height: 100vh;
  background-image: url('https://source.unsplash.com/random/1600x900');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #ff6b6b;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #ff5252;
}
    `,
  },
  {
    name: "Animated Cards",
    description: "A set of animated card designs with hover effects",
    html: `
<div class="card-container">
  <div class="card">
    <div class="card-content">
      <h3>Card 1</h3>
      <p>Hover over me!</p>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <h3>Card 2</h3>
      <p>Hover over me!</p>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <h3>Card 3</h3>
      <p>Hover over me!</p>
    </div>
  </div>
</div>
    `,
    css: `
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
}

.card {
  width: 200px;
  height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.card:hover::before {
  transform: translateY(0);
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 20px;
  color: #333;
  transition: color 0.3s ease;
}

.card:hover .card-content {
  color: white;
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
}
    `,
  },
  {
    name: "Neon Buttons",
    description: "Eye-catching neon button designs",
    html: `
<div class="button-container">
  <button class="neon-button">Neon</button>
  <button class="neon-button">Glow</button>
  <button class="neon-button">Effect</button>
</div>
    `,
    css: `
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  gap: 2rem;
}

.neon-button {
  font-size: 1.5rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.55), 0 0 0.5em currentColor;
  box-shadow: inset 0 0 0.5em 0 #fff, 0 0 0.5em 0 #fff;
  position: relative;
  transition: background-color 100ms linear;
}

.neon-button::before {
  content: '';
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: perspective(1.2em) rotateX(40deg) scale(1, 0.35);
  filter: blur(1.5em);
  opacity: 0.7;
  pointer-events: none;
}

.neon-button:hover,
.neon-button:focus {
  background-color: #fff;
  color: #000;
  text-shadow: none;
}

.neon-button:hover::before,
.neon-button:focus::before {
  opacity: 1;
}

.neon-button:hover::after,
.neon-button:focus::after {
  opacity: 1;
}
    `,
  },
  {
    name: "Glassmorphism",
    description: "A modern glassmorphism UI design",
    html: `
<div class="glassmorphism-container">
  <div class="glass-card">
    <h2>Glassmorphism</h2>
    <p>A modern UI trend</p>
    <button>Learn More</button>
  </div>
</div>
    `,
    css: `
.glassmorphism-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('https://source.unsplash.com/random/1920x1080');
  background-size: cover;
  background-position: center;
}

.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  max-width: 300px;
  width: 100%;
}

.glass-card h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.glass-card p {
  margin-bottom: 1.5rem;
}

.glass-card button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.glass-card button:hover {
  background: rgba(255, 255, 255, 0.3);
}
    `,
  },
  {
    name: "Neumorphism",
    description: "A neumorphic design showcasing soft UI elements",
    html: `
<div class="neumorphism-container">
  <div class="neumorphic-card">
    <h2>Neumorphism</h2>
    <p>Soft UI design trend</p>
    <button class="neumorphic-button">Click me</button>
  </div>
</div>
    `,
    css: `
.neumorphism-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e0e5ec;
}

.neumorphic-card {
  width: 300px;
  padding: 2rem;
  border-radius: 20px;
  background: #e0e5ec;
  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff;
  text-align: center;
}

.neumorphic-card h2 {
  color: #333;
  margin-bottom: 1rem;
}

.neumorphic-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.neumorphic-button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: #e0e5ec;
  box-shadow: 5px 5px 10px #bec3c9, -5px -5px 10px #ffffff;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.neumorphic-button:hover {
  box-shadow: inset 5px 5px 10px #bec3c9, inset -5px -5px 10px #ffffff;
}
    `,
  },
  {
    name: "Modern Signup Form",
    description: "A sleek split-screen signup form with gradient background",
    html: `
<div class="signup-container">
  <div class="signup-left">
    <h2>Create a new account.</h2>
    <p>Embark on a Journey to a Healthier Lifestyle with Our Fitness and Wellness Community</p>
    <div class="testimonial">
      <p>"Signing up for this wellness website was the best decision I made for my health."</p>
      <div class="testimonial-author">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/learn-to-build-a-website-with-login-and-signup-forms-using-v0-im28jbk0qx6b1-IBtR4GsUco56sPuHqJbVPNqmt8d5NC.webp" alt="Testimonial" class="author-image" />
        <div class="author-info">
          <h4>James Anderson</h4>
          <span>Athlete</span>
        </div>
      </div>
    </div>
  </div>
  <div class="signup-right">
    <div class="form-header">
      <h3>Get start</h3>
      <p>Already a member? <a href="#">Log in</a></p>
    </div>
    <form class="signup-form">
      <div class="form-row">
        <div class="form-group">
          <label>First name</label>
          <input type="text" placeholder="Enter first name" />
        </div>
        <div class="form-group">
          <label>Last name</label>
          <input type="text" placeholder="Enter last name" />
        </div>
      </div>
      <div class="form-group">
        <label>Gender</label>
        <div class="gender-options">
          <label class="gender-option">
            <input type="radio" name="gender" value="male" />
            <span>Male</span>
          </label>
          <label class="gender-option">
            <input type="radio" name="gender" value="female" />
            <span>Female</span>
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" placeholder="example@email.com" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
      </div>
      <button type="submit">Sign up</button>
    </form>
  </div>
</div>
  `,
    css: `
.signup-container {
  display: flex;
  min-height: 100vh;
  background: white;
}

.signup-left {
  flex: 1;
  padding: 4rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.signup-left h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.testimonial {
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.author-image {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 1rem;
}

.author-info h4 {
  margin: 0;
  font-size: 1rem;
}

.author-info span {
  font-size: 0.875rem;
  opacity: 0.8;
}

.signup-right {
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.form-header a {
  color: #6366f1;
  text-decoration: none;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.gender-options {
  display: flex;
  gap: 1rem;
}

.gender-option {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.gender-option input {
  margin: 0;
}

button[type="submit"] {
  background: #6366f1;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

button[type="submit"]:hover {
  background: #4f46e5;
}

@media (max-width: 768px) {
  .signup-container {
    flex-direction: column;
  }
  
  .signup-left,
  .signup-right {
    padding: 2rem;
  }
  
  .form-row {
    flex-direction: column;
  }
}
  `,
  },
  {
    name: "Toggle Switches",
    description: "Modern toggle switches and segmented controls",
    html: `
<div class="toggle-container">
  <h2>Switch & Toggle</h2>
  
  <div class="toggle-group">
    <div class="segmented-control">
      <button class="segment active">Yearly</button>
      <button class="segment">Monthly</button>
    </div>
    
    <div class="segmented-control variant-2">
      <button class="segment">Yearly</button>
      <button class="segment active">Monthly</button>
    </div>
    
    <label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  </div>
</div>
  `,
    css: `
.toggle-container {
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.toggle-container h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 2rem;
}

.toggle-group {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.segmented-control {
  background: #fff;
  padding: 0.25rem;
  border-radius: 100px;
  display: flex;
  gap: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.segment {
  padding: 0.5rem 1.5rem;
  border: none;
  background: none;
  border-radius: 100px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.segment.active {
  background: #1e293b;
  color: white;
}

.variant-2 {
  padding: 0.25rem;
  background: #f1f5f9;
}

.variant-2 .segment {
  color: #64748b;
}

.variant-2 .segment.active {
  background: #fff;
  color: #1e293b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e2e8f0;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #1e293b;
}

input:checked + .slider:before {
  transform: translateX(20px);
}
  `,
  },
]

export default function Designs() {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null)
  const [showCode, setShowCode] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setShowSnackbar(true)
        setTimeout(() => setShowSnackbar(false), 3000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <div className={styles.designsContainer}>
      <header className={styles.header}>
        <h1>Creative Designs</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.designGrid}>
          {designs.map((design, index) => (
            <div
              key={index}
              className={styles.designCard}
              onClick={() => {
                setSelectedDesign(design)
                setShowCode(false) // Reset code visibility when selecting new design
              }}
            >
              <h3>{design.name}</h3>
            </div>
          ))}
        </div>
        {selectedDesign && (
          <div className={styles.designPreview}>
            <h2>{selectedDesign.name}</h2>
            <p>{selectedDesign.description}</p>

            <div className={styles.livePreview}>
              <h3>Live Preview</h3>
              <div className={styles.previewFrame}>
                <style dangerouslySetInnerHTML={{ __html: selectedDesign.css }} />
                <div dangerouslySetInnerHTML={{ __html: selectedDesign.html }} />
              </div>
            </div>

            <button className={styles.showCodeButton} onClick={() => setShowCode(!showCode)}>
              <Code size={16} />
              {showCode ? "Hide Code" : "Show Code"}
            </button>

            {showCode && (
              <div className={styles.previewContainer}>
                <div className={styles.codePreview}>
                  <div className={styles.codeHeader}>
                    <h3>HTML</h3>
                    <button onClick={() => copyToClipboard(selectedDesign.html)}>
                      <Copy size={16} /> Copy
                    </button>
                  </div>
                  <pre className={styles.codeEditor}>
                    <code>{selectedDesign.html}</code>
                  </pre>
                </div>
                <div className={styles.codePreview}>
                  <div className={styles.codeHeader}>
                    <h3>CSS</h3>
                    <button onClick={() => copyToClipboard(selectedDesign.css)}>
                      <Copy size={16} /> Copy
                    </button>
                  </div>
                  <pre className={styles.codeEditor}>
                    <code>{selectedDesign.css}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      {showSnackbar && <Snackbar message="Copied to clipboard!" />}
    </div>
  )
}

