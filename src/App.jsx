import { useState, useEffect } from 'react'
import './App.css'
import phuongtvImg from './assets/phuongtv.png'
import nbzzzImg from './assets/nbzzz.png'
import leaderImg from './assets/vdtai.jpeg'
import uiuxImg from './assets/hinno.jpeg'
import Timeline from './Timeline'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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

  // Always move viewport to top whenever switching between pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const teamMembers = [
    {
      id: 1,
      name: "Võ Đức Tài",
      mssv: "23521381",
      role: "Team Leader",
      avatar: leaderImg
    },
    {
      id: 2,
      name: "ThS. Tạ Việt Phương",
      mssv: "phuongtv",
      role: "Lecturer",
      avatar: phuongtvImg
    },
    {
      id: 3,
      name: "Nguyễn Gia Bảo",
      mssv: "22520121",
      role: "Frontend Developer",
      avatar: "https://via.placeholder.com/200/03a9f4/ffffff?text=Member+2"
    },
    {
      id: 4,
      name: "Nguyễn Võ Ngọc Bảo",
      mssv: "23520131",
      role: "Frontend Developer",
      avatar: nbzzzImg
    },
    {
      id: 5,
      name: "Nguyễn Lan Hương",
      mssv: "23520588", 
      role: "UI/UX Designer",
      avatar: uiuxImg
    },
    {
      id: 6,
      name: "Thái Văn Vũ",
      mssv: "23521816",
      role: "Database Admin",
      avatar: "https://via.placeholder.com/200/00bcd4/ffffff?text=Member+5"
    },
    {
      id: 7,
      name: "Phạm Bá Bằng",
      mssv: "23520090",
      role: "Backend Developer",
      avatar: "https://via.placeholder.com/200/03a9f4/ffffff?text=Member+6"
    },
    {
      id: 8,
      name: "Thiều Đinh Nam Tài",
      mssv: "23521378",
      role: "Backend Developer",
      avatar: "https://via.placeholder.com/200/00bcd4/ffffff?text=Member+7"
    }
  ];

  if (currentPage === 'timeline') {
    return (
      <div className="app">
        {/* Header/Navigation */}
        <header className="header">
          <div className="container">
            <div className="logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
              ALT-F4
            </div>
            <nav className="nav">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Trang chủ</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => scrollToSection('intro'), 100); }}>Giới thiệu đồ án</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => scrollToSection('members'), 100); }}>Team members</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => scrollToSection('goals'), 100); }}>Mục tiêu dồ án</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('timeline'); }} className="active">Timeline đồ án</a>
              <button className="contact-btn">Liên hệ</button>
            </nav>
          </div>
        </header>

        <Timeline onNavigateHome={() => setCurrentPage('home')} />

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-left">
                <h3>ALT-F4</h3>
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
    );
  }

  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">ALT-F4</div>
          <nav className="nav">
            <a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>Giới thiệu đồ án</a>
            <a href="#members" onClick={(e) => { e.preventDefault(); scrollToSection('members'); }}>Team members</a>
            <a href="#goals" onClick={(e) => { e.preventDefault(); scrollToSection('goals'); }}>Mục tiêu dồ án</a>
            <a href="#timeline" onClick={(e) => { e.preventDefault(); setCurrentPage('timeline'); }}>Timeline đồ án</a>
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
            <h2>Giới thiệu đồ án</h2>
          </div>
          <p className="intro-text">Nội dung hệ hệ</p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="members-section" id="members">
        <div className="container">
          <div className="section-header">
            <h2>Team members</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-inner">
                  <div className="team-card-front">
                    <div className="member-avatar">
                      <img src={member.avatar} alt={member.name} />
                    </div>
                    <div className="member-info-preview">
                      <h3>{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                    </div>
                  </div>
                  <div className="team-card-back">
                    <div className="member-details">
                      <h3>{member.name}</h3>
                      <div className="member-info-item">
                        <span className="info-label">MSSV:</span>
                        <span className="info-value">{member.mssv}</span>
                      </div>
                      <div className="member-info-item">
                        <span className="info-label">Role:</span>
                        <span className="info-value">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals-section" id="goals">
        <div className="container">
          <div className="section-header">
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
              <h3>ALT-F4</h3>
              <p>Liên hệ với chúng mình</p>
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
