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
            <span className="icon">📖</span>
            <h2>Giới thiệu đồ án</h2>
          </div>
          
          <div className="intro-content">
            <div className="intro-card">
              <div className="intro-icon">🎯</div>
              <h3>Lựa chọn đề tài</h3>
              <p>
                Nhóm lựa chọn đề tài phát triển website bán hàng điện tử nhằm đáp ứng nhu cầu mua sắm 
                trực tuyến ngày càng tăng của người tiêu dùng trong thời đại số.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">📊</div>
              <h3>Xu hướng thị trường</h3>
              <p>
                Hiện nay, xu hướng khách hàng tập trung vào sự tiện lợi, minh bạch thông tin, so sánh giá 
                và dịch vụ hậu mãi, do đó việc xây dựng một trang web thương mại điện tử chuyên về laptop 
                là cần thiết để bắt kịp xu hướng thị trường.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">💡</div>
              <h3>Lý do hình thành</h3>
              <p>
                Lý do hình thành đồ án xuất phát từ thực tế nhiều cửa hàng laptop nhỏ lẻ chưa có hệ thống 
                bán hàng trực tuyến, gây khó khăn trong việc tiếp cận khách hàng. Website sẽ giúp doanh nghiệp 
                mở rộng kênh bán hàng, tối ưu chi phí vận hành, và nâng cao trải nghiệm khách hàng.
              </p>
            </div>
          </div>

          <div className="intro-highlights">
            <div className="highlight-item">
              <span className="highlight-number">01</span>
              <h4>E-Commerce</h4>
              <p>Platform bán hàng điện tử hiện đại</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">02</span>
              <h4>User Experience</h4>
              <p>Tối ưu trải nghiệm người dùng</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">03</span>
              <h4>Scalable</h4>
              <p>Dễ dàng mở rộng và phát triển</p>
            </div>
          </div>
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
              <h3>Mục tiêu 1</h3>
              <p>Cung cấp nền tảng bán hàng điện tử trực tuyến, tối ưu trải nghiệm khách hàng.</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">✓</div>
              <h3>Mục tiêu 2</h3>
              <p>Hỗ trợ quản lý sản phẩm, đơn hàng, khách hàng & báo cáo doanh thu.</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">✓</div>
              <h3>Mục tiêu 3</h3>
              <p>Tăng khả năng quảng bá & hiệu quả kinh doanh cho cửa hàng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Tiêu chí phát triển</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tiêu chí 1</h3>
              <p>Giao diện thân thiện, trực quan, dễ sử dụng trên máy tính.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tiêu chí 2</h3>
              <p>Có hỗ trợ quản lý đơn hàng, khách hàng & báo cáo.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tiêu chí 3</h3>
              <p>Thiết kế CSDL chuẩn hóa, dễ mở rộng & tích hợp sau này.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">○</div>
              <h3>Tiêu chí 4</h3>
              <p>Ưu tiên bảo mật thông tin người dùng & khả năng mở rộng hệ thống.</p>
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
              <h3>Front-end</h3>
              <div className="tech-tags">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
                <span className="tag">ReactJS</span>
                <span className="tag">NextJS</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">✓</div>
              <h3>Back-end</h3>
              <div className="tech-tags">
                <span className="tag">PHP</span>
                <span className="tag">Laravel</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">✓</div>
              <h3>Cơ sở dữ liệu</h3>
              <div className="tech-tags">
                <span className="tag">MySQL</span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon">✓</div>
              <h3>Công cụ phát triển</h3>
              <div className="tech-tags">
                <span className="tag">Visual Studio Code</span>
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
