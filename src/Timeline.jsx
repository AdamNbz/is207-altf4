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
      subtitle: "Chốt đề tài → Phân công → Chuẩn bị báo cáo lần 1",
      meetings: [
        {
          date: "20/09/2025",
          title: "Họp lần 1 – Chốt đề tài seminar & đồ án",
          content: [
            "Chọn đề tài seminar (2.2): Ứng dụng AI vào website thương mại điện tử (ưu/nhược điểm, khó khăn, giải pháp, cách thực hiện).",
            "Chốt đề tài đồ án nhóm: Phát triển website TMĐT B2C bán laptop trực tuyến."
          ]
        },
        {
          date: "27/09/2025",
          title: "Họp lần 2 – Lên kế hoạch & phân công seminar + demo",
          content: [
            "Phân rã nội dung seminar thành các phần và giao nhiệm vụ theo từng mảng:"
          ],
          assignments: [
            { task: "Mở đầu/bối cảnh", member: "Phạm Bá Bằng" },
            { task: "Khái niệm AI & so sánh truyền thống vs AI-driven", member: "Nguyễn Gia Bảo" },
            { task: "Chatbot/agent & Recommender cho TMĐT", member: "Nguyễn Lan Hương" },
            { task: "Phân tích hành vi/cảnh báo nhu cầu & Fraud Detection", member: "Thái Văn Vũ" },
            { task: "Ưu/nhược & khó khăn áp dụng AI TMĐT", member: "Thiều Đinh Nam Tài" },
            { task: "Build model demo", member: "Võ Đức Tài" },
            { task: "Website giới thiệu đồ án", member: "Nguyễn Võ Ngọc Bảo" }
          ]
        },
        {
          date: "04/10/2025",
          title: "Họp lần 3 – Báo cáo tiến độ seminar & chuẩn bị vào đồ án",
          content: [
            "Seminar: đã xong phần lớn nội dung, nhưng slide chưa hoàn thiện.",
            "Đồ án: chia 3 nhóm công việc giai đoạn đầu và phân công:"
          ],
          assignments: [
            { task: "Front-end (3 người)", member: "Võ Đức Tài, Nguyễn Võ Ngọc Bảo, Nguyễn Lan Hương" },
            { task: "Phân tích thiết kế hệ thống", member: "Phạm Bá Bằng" },
            { task: "ERD & CSDL", member: "Thái Văn Vũ" },
            { task: "Phân tích bài toán", member: "Thiều Đinh Nam Tài" }
          ]
        },
        {
          date: "11/10/2025",
          title: "Họp lần 4 – Phân công chi tiết để báo cáo đồ án lần 1",
          content: [
            "Mục tiêu: chia việc rõ để đảm bảo tiến độ \"Báo cáo đồ án lần 1\"."
          ],
          groups: [
            {
              name: "Web (UI + chức năng)",
              tasks: [
                { task: "Đăng ký/đăng nhập/quên mật khẩu/đổi mật khẩu", member: "Nguyễn Lan Hương", deadline: "13/10 → 28/10" },
                { task: "Trang sản phẩm/phụ kiện/tài khoản/lịch sử mua hàng", member: "Nguyễn Võ Ngọc Bảo", deadline: "" },
                { task: "Trang chính/giỏ hàng/chi tiết sản phẩm", member: "Võ Đức Tài", deadline: "" }
              ]
            },
            {
              name: "Phân tích thiết kế hệ thống",
              tasks: [
                { task: "Phân tích nhu cầu", member: "Thiều Đinh Nam Tài", deadline: "13/10 → 15/10" },
                { task: "Thiết kế CSDL", member: "Thái Văn Vũ", deadline: "24/10 → 29/10" },
                { task: "Sơ đồ chức năng end user", member: "Nguyễn Gia Bảo", deadline: "13/10 → 23/10" },
                { task: "Sơ đồ chức năng admin", member: "Phạm Bá Bằng", deadline: "13/10 → 23/10" }
              ]
            }
          ]
        },
        {
          date: "25/10/2025",
          title: "Họp lần 5 – Báo cáo tiến độ sau 2 tuần",
          content: [
            "Nhìn chung: các thành viên hoàn thành phần lớn nhiệm vụ, chuẩn bị rà soát lỗi.",
            "Kỳ vọng: buổi báo cáo tuần sau sẽ đủ tài liệu."
          ]
        }
      ],
      conclusion: "Giai đoạn này tập trung vào chốt đề tài → chia nhỏ hạng mục → phân công seminar & đồ án → chuẩn bị báo cáo lần 1, và đến 25/10 thì đã \"gần hoàn thiện\" các phần đã giao (bắt đầu bước rà soát)."
    },
    {
      id: 2,
      title: "Tiến độ 2",
      subtitle: "Triển khai Backend/API – Từ 18/11 đến 13/12/2025",
      meetings: [
        {
          date: "18/11/2025",
          title: "Họp – Rà lại tiến độ & lập kế hoạch triển khai Backend/API",
          content: [
            "Nhận xét chung: Công đoạn làm đủ, thành viên làm đúng phần được giao, có trao đổi góp ý.",
            "Lưu ý: Thầy nhận xét tiến độ còn chậm (ở lần trước)."
          ],
          groups: [
            {
              name: "Nhóm CSDL",
              tasks: [
                { task: "Cài đặt CSDL (migrations, dữ liệu mẫu)", member: "Võ Đức Tài", deadline: "23/11/2025" }
              ]
            },
            {
              name: "Nhóm API cho User (client)",
              tasks: [
                { task: "API Products (GET /products, /products/{id}, /categories, /brands)", member: "Phạm Bá Bằng", deadline: "28/11/2025" },
                { task: "API Authentication & Cart (register/login/logout, GET /user, GET/POST/PUT/DELETE cart)", member: "Thiều Đinh Nam Tài", deadline: "28/11/2025" },
                { task: "API Checkout & Orders (checkout, orders, cancel order)", member: "Thái Văn Vũ", deadline: "28/11/2025" }
              ]
            },
            {
              name: "Nhóm cài đặt/tích hợp API (client)",
              tasks: [
                { task: "Cài đặt API Authentication", member: "Nguyễn Gia Bảo", deadline: "05/12/2025" },
                { task: "Cài đặt API Products", member: "Nguyễn Võ Ngọc Bảo", deadline: "05/12/2025" },
                { task: "Cài đặt API Cart & Checkout", member: "Nguyễn Lan Hương", deadline: "05/12/2025" }
              ]
            },
            {
              name: "Nhóm API Admin (controller)",
              tasks: [
                { task: "ProductController admin (CRUD + stock)", member: "Phạm Bá Bằng", deadline: "06/12/2025" },
                { task: "DashboardController admin (overview, revenue, stock, category, low-stock, …)", member: "Thiều Đinh Nam Tài", deadline: "06/12/2025" },
                { task: "OrderController & PromotionController (orders, status, promotions + add-products, …)", member: "Thái Văn Vũ", deadline: "06/12/2025" }
              ]
            },
            {
              name: "Nhóm cài đặt/tích hợp Admin API",
              tasks: [
                { task: "Cài đặt Dashboard Controller", member: "Nguyễn Gia Bảo", deadline: "13/12/2025" },
                { task: "Cài đặt ProductController", member: "Nguyễn Võ Ngọc Bảo", deadline: "13/12/2025" },
                { task: "Cài đặt OrderController", member: "Nguyễn Lan Hương", deadline: "13/12/2025" }
              ]
            }
          ]
        }
      ],
      conclusion: "Chuyển trọng tâm sang xây dựng backend theo nhóm API (client + admin) với deadline khá dày từ 23/11 → 13/12, đồng thời có nhắc nhở \"tiến độ còn chậm\" nên kế hoạch chia việc cụ thể hơn và bám deadline rõ ràng."
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
              <li>- Mỗi tiến độ bao gồm các buổi họp với nội dung chi tiết và phân công công việc.</li>
              <li>- Click vào từng tiến độ để xem chi tiết các buổi họp và nhiệm vụ được giao.</li>
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
                <div className="phase-header-content">
                  <span className="phase-title">{phase.title}</span>
                  <span className="phase-subtitle">{phase.subtitle}</span>
                </div>
                <span className="toggle-icon">{expandedPhase === phase.id ? '−' : '+'}</span>
              </button>
              
              {expandedPhase === phase.id && (
                <div className="phase-content">
                  <div className="meetings-list">
                    {phase.meetings.map((meeting, index) => (
                      <div key={index} className="meeting-card">
                        <div className="meeting-header">
                          <span className="meeting-date">📅 {meeting.date}</span>
                          <h3 className="meeting-title">{meeting.title}</h3>
                        </div>
                        
                        <div className="meeting-content">
                          {meeting.content && meeting.content.map((text, i) => (
                            <p key={i} className="meeting-text">{text}</p>
                          ))}
                          
                          {meeting.assignments && (
                            <div className="assignments-table">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Nhiệm vụ</th>
                                    <th>Thành viên</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {meeting.assignments.map((item, i) => (
                                    <tr key={i}>
                                      <td>{item.task}</td>
                                      <td className="member-name">{item.member}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                          
                          {meeting.groups && meeting.groups.map((group, gIndex) => (
                            <div key={gIndex} className="task-group">
                              <h4 className="group-name">📁 {group.name}</h4>
                              <div className="assignments-table">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Nhiệm vụ</th>
                                      <th>Thành viên</th>
                                      {group.tasks.some(t => t.deadline) && <th>Deadline</th>}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {group.tasks.map((item, i) => (
                                      <tr key={i}>
                                        <td>{item.task}</td>
                                        <td className="member-name">{item.member}</td>
                                        {group.tasks.some(t => t.deadline) && (
                                          <td className="deadline">{item.deadline || "—"}</td>
                                        )}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="phase-conclusion">
                    <h4>📌 Kết luận {phase.title}:</h4>
                    <p>{phase.conclusion}</p>
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
