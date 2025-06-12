import Navbar from "./navbar"
import "./App.css"

export default function App() {
  return (
    <div className="landing-page">
      {/* Header */}
   <Navbar/>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">
                <div className="title-line">
                  <span>I AM A</span>
                  <div className="icon-placeholder icon-1">
                    <span>🎨</span>
                  </div>
                  <span>FREELANCE</span>
                </div>
                <div className="title-line">
                  <span>DESIGNER</span>
                  <div className="icon-placeholder icon-2">
                    <span>💻</span>
                  </div>
                  <span>FROM</span>
                </div>
                <div className="title-line">
                  <span>SAN FRANCISCO</span>
                </div>
              </h1>
            </div>

            <div className="bottom-content">
              {/* Left side - Logos */}
              <div className="footer-logos">
                <div className="footer-logo">
                  <span className="logo-dot"></span>
                  doradesign
                </div>
                <div className="footer-logo">
                  <span className="wave-icon">〜</span>
                  wave
                </div>
                <div className="footer-logo siloila">SILOILA</div>
              </div>

              {/* Right side - Description */}
              <div className="footer-description">
                <p>
                  Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive
                  branding and web designs, each crafted to captivate and inspire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

