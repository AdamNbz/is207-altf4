import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">Đồ án nhóm ALT-F4</div>
          <nav className="nav">
            <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Giới thiệu đồ án</a>
            <a href="#members" onClick={(e) => { e.preventDefault(); scrollToSection('members'); }}>Team members</a>
            <a href="#goals" onClick={(e) => { e.preventDefault(); scrollToSection('goals'); }}>Mục tiêu dồ án</a>
            <button className="contact-btn">Liên hệ</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1 className="hero-title">Phát triển ứng dụng web</h1>
          <p className="hero-subtitle">Trang web bán hàng điện tử</p>
          <button className="scroll-btn" onClick={() => scrollToSection('intro')}>
            <span>↓</span>
          </button>
        </div>
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section" id="intro">
        <div className="container">
          <div className="section-header">
            <span className="icon">📖</span>
            <h2>Giới thiệu đồ án</h2>
          </div>
          <p className="intro-text">Nội dung hệ hệ</p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="members-section" id="members">
        <div className="container">
          <div className="section-header">
            <span className="icon">👥</span>
            <h2>Team members</h2>
          </div>
          <p className="members-description">Nội dung làm giống web trước<br />là được</p>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals-section" id="goals">
        <div className="container">
          <div className="section-header">
            <span className="icon">👍</span>
            <h2>Mục tiêu đồ án</h2>
          </div>
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-icon">✓</div>
              <h3>a</h3>
              <p>nội dung</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">✓</div>
              <h3>b</h3>
              <p>nội dung</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">✓</div>
              <h3>c</h3>
              <p>nội dung</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">✓</div>
              <h3>d</h3>
              <p>nội dung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="icon">⚡</span>
            <h2>Chức năng website</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tên chức năng</h3>
              <p>Nội dung chức năng</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tên chức năng</h3>
              <p>Nội dung chức năng</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tên chức năng</h3>
              <p>Nội dung chức năng</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tên chức năng</h3>
              <p>Nội dung chức năng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <span className="icon">📦</span>
            <h2>Công nghệ sử dụng</h2>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">✓</div>
              <h3>frontend</h3>
              <div className="tech-tags">
                <span className="tag">item</span>
                <span className="tag">item</span>
                <span className="tag">item</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">✓</div>
              <h3>công cụ dev</h3>
              <div className="tech-tags">
                <span className="tag">item</span>
                <span className="tag">item</span>
                <span className="tag">item</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">✓</div>
              <h3>backend</h3>
              <div className="tech-tags">
                <span className="tag">item</span>
                <span className="tag">item</span>
                <span className="tag">item</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">✓</div>
              <h3>công nghệ khác</h3>
              <div className="tech-tags">
                <span className="tag">item</span>
                <span className="tag">item</span>
                <span className="tag">item</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>Đồ án nhóm ALT-F4</h3>
              <p>Liên hệ với chúng tôi</p>
              <div className="social-icons">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">in</a>
                <a href="#" className="social-icon">@</a>
                <a href="#" className="social-icon">ig</a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Topic</h4>
                <a href="#">Page</a>
                <a href="#">Page</a>
                <a href="#">Page</a>
              </div>
              <div className="footer-column">
                <h4>Topic</h4>
                <a href="#">Page</a>
                <a href="#">Page</a>
                <a href="#">Page</a>
              </div>
              <div className="footer-column">
                <h4>Topic</h4>
                <a href="#">Page</a>
                <a href="#">Page</a>
                <a href="#">Page</a>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-badge">2025-2026</div>
              <div className="footer-badge">IS207.Q13</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <span>↑</span>
      </button>
    </div>
  )
}

export default App
