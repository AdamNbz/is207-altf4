import { useState } from 'react'
import './Timeline.css'

function Timeline({ onNavigateHome }) {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  const timelinePhases = [
    {
      id: 1,
      title: "Tiến độ 1",
      documents: [
        {
          title: "BIÊN BẢN HỌP LẦN 1",
          pdfUrl: "/path/to/bien-ban-hop-1.pdf"
        },
        {
          title: "PHÂN CÔNG THÀNH VIÊN",
          pdfUrl: "/path/to/phan-cong-thanh-vien.pdf"
        }
      ]
    },
    {
      id: 2,
      title: "Tiến độ 2",
      documents: [
        {
          title: "BIÊN BẢN HỌP LẦN 2",
          pdfUrl: "/path/to/bien-ban-hop-2.pdf"
        },
        {
          title: "BÁO CÁO TIẾN ĐỘ 2",
          pdfUrl: "/path/to/bao-cao-tien-do-2.pdf"
        }
      ]
    },
    {
      id: 3,
      title: "Tiến độ 3",
      documents: [
        {
          title: "BIÊN BẢN HỌP LẦN 3",
          pdfUrl: "/path/to/bien-ban-hop-3.pdf"
        },
        {
          title: "BÁO CÁO TIẾN ĐỘ 3",
          pdfUrl: "/path/to/bao-cao-tien-do-3.pdf"
        }
      ]
    }
  ];

  return (
    <div className="timeline-page">
      {/* Hero Section */}
      <section className="timeline-hero">
        <div className="timeline-hero-content">
          <h1 className="timeline-title">Timeline dự án</h1>
          <div className="timeline-info-box">
            <h2>Thông tin timeline:</h2>
            <ul>
              <li>- Dưới đây là timeline từng tiến độ của dự án.</li>
              <li>- Mỗi tiến độ sẽ có 2 tài liệu:</li>
              <li className="sub-item">+ Biên bản họp: Tài liệu ghi lại nội dung cuộc họp của nhóm.</li>
              <li className="sub-item">+ Phân công thành viên: Tài liệu ghi lại phân công công việc của từng thành viên trong nhóm.</li>
              <li>- Các tài liệu này sẽ được cập nhật thường xuyên trong quá trình thực hiện dự án.</li>
              <li>- Các bạn có thể tham khảo các tài liệu này để hiểu rõ hơn về tiến độ và công việc của nhóm.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Phases */}
      <section className="timeline-phases">
        <div className="container">
          {timelinePhases.map((phase) => (
            <div key={phase.id} className="phase-item">
              <button 
                className={`phase-header ${expandedPhase === phase.id ? 'active' : ''}`}
                onClick={() => togglePhase(phase.id)}
              >
                <span>{phase.title}</span>
                <span className="toggle-icon">{expandedPhase === phase.id ? '−' : '+'}</span>
              </button>
              
              {expandedPhase === phase.id && (
                <div className="phase-content">
                  <div className="documents-grid">
                    {phase.documents.map((doc, index) => (
                      <div key={index} className="document-card">
                        <div className="document-preview">
                          <iframe 
                            src={doc.pdfUrl}
                            title={doc.title}
                            className="pdf-preview"
                          />
                          <div className="document-overlay">
                            <h3>{doc.title}</h3>
                            <button className="view-btn">
                              <span>📄</span> Xem chi tiết
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Timeline;
