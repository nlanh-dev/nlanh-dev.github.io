/* =========================================
   PORTFOLIO SCRIPT — Hoa Trà 2026
   ========================================= */

// ── PROJECT DATA ──────────────────────────
const projects = {
  1: {
    icon: '📁',
    title: 'Quản lý tệp và thư mục',
    objective: 'Xây dựng một hệ thống quản lý dữ liệu cá nhân khoa học, có tính tổ chức cao giúp dễ dàng truy xuất, bảo quản và sao lưu tệp tin.',
    process: [
      'Phân tích cấu trúc thư mục hiện tại và xác định điểm yếu',
      'Thiết kế hệ thống phân cấp thư mục theo chủ đề và thời gian',
      'Áp dụng quy tắc đặt tên file: YYYY-MM-DD_TênTệp_v1.0',
      'Thiết lập lịch sao lưu tự động lên Google Drive và ổ cứng ngoài',
      'Tạo tài liệu hướng dẫn sử dụng hệ thống',
    ],
    evidence: '🖼️ Ảnh chụp màn hình cấu trúc thư mục đã được sắp xếp khoa học.',
    pdf: 'Báo cáo Bài tập 1 — Quản lý tệp và thư mục.pdf',
    link: '#',
  },
  2: {
    icon: '🔍',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    objective: 'Nắm vững kỹ năng tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin học thuật theo tiêu chí CRAAP.',
    process: [
      'Tìm hiểu các toán tử tìm kiếm Boolean: AND, OR, NOT, " "',
      'Thực hành tìm kiếm nâng cao trên Google Scholar',
      'Áp dụng tiêu chí CRAAP: Currency, Relevance, Authority, Accuracy, Purpose',
      'So sánh và đánh giá 5 nguồn thông tin về chủ đề AI trong giáo dục',
      'Tổng hợp kết quả thành bảng đánh giá nguồn',
    ],
    evidence: '🖼️ Bảng đánh giá nguồn CRAAP và ảnh chụp kết quả tìm kiếm Google Scholar.',
    pdf: 'Báo cáo Bài tập 2 — Tìm kiếm học thuật.pdf',
    link: '#',
  },
  3: {
    icon: '🤖',
    title: 'Viết Prompt hiệu quả',
    objective: 'Hiểu và áp dụng mô hình CLEAR để xây dựng các Prompt cho AI tạo ra kết quả chất lượng, chính xác và hữu ích.',
    process: [
      'Nghiên cứu mô hình CLEAR: Context, Length, Examples, Adjustments, Review',
      'So sánh output khi dùng Prompt kém và Prompt tối ưu',
      'Thực hành viết 10 Prompt cho các tình huống học tập khác nhau',
      'Đánh giá và tinh chỉnh Prompt dựa trên kết quả thực tế',
      'Tổng hợp bộ Prompt mẫu cho sinh viên đại học',
    ],
    evidence: '🖼️ Bộ ảnh so sánh output từ Prompt kém và Prompt theo mô hình CLEAR.',
    pdf: 'Báo cáo Bài tập 3 — Prompt Engineering.pdf',
    link: '#',
  },
  4: {
    icon: '🤝',
    title: 'Hợp tác trực tuyến',
    objective: 'Ứng dụng các công cụ cộng tác trực tuyến để quản lý dự án nhóm hiệu quả và chuyên nghiệp.',
    process: [
      'Thiết lập board Trello với các cột: Backlog, In Progress, Review, Done',
      'Phân công nhiệm vụ và đặt deadline cho từng thành viên',
      'Sử dụng Google Docs để cộng tác viết báo cáo theo thời gian thực',
      'Tổ chức cuộc họp online qua Google Meet với agenda rõ ràng',
      'Tổng kết hiệu quả làm việc nhóm và bài học rút ra',
    ],
    evidence: '🖼️ Ảnh chụp board Trello và lịch sử chỉnh sửa Google Docs.',
    pdf: 'Báo cáo Bài tập 4 — Hợp tác trực tuyến.pdf',
    link: '#',
  },
  5: {
    icon: '🎨',
    title: 'Sáng tạo nội dung số bằng AI',
    objective: 'Tạo ra các sản phẩm truyền thông số chuyên nghiệp bằng cách kết hợp công cụ AI với nền tảng thiết kế sáng tạo.',
    process: [
      'Lên ý tưởng và xây dựng kịch bản nội dung (content brief)',
      'Thiết kế infographic chủ đề "Kỹ năng số thế kỷ 21" bằng Canva',
      'Tạo video ngắn 60 giây trình bày về AI trong học tập bằng CapCut',
      'Sử dụng ChatGPT và Gemini để hỗ trợ viết script và caption',
      'Tối ưu hóa nội dung cho mạng xã hội học thuật',
    ],
    evidence: '🖼️ Infographic thiết kế bằng Canva và video đã xuất bản.',
    pdf: 'Báo cáo Bài tập 5 — Sáng tạo nội dung số.pdf',
    link: '#',
  },
  6: {
    icon: '⚖️',
    title: 'AI có trách nhiệm trong học thuật',
    objective: 'Phát triển tư duy phản biện về đạo đức AI và áp dụng nguyên tắc liêm chính học thuật trong việc sử dụng công cụ AI.',
    process: [
      'Nghiên cứu các nguyên tắc AI có trách nhiệm: Transparency, Fairness, Accountability',
      'Phân tích các tình huống vi phạm đạo đức AI trong học tập',
      'Xây dựng bộ quy tắc cá nhân về sử dụng AI trong học thuật',
      'Thảo luận về ranh giới giữa hỗ trợ AI và gian lận học thuật',
      'Viết bài phản tư về trải nghiệm sử dụng AI trong học kỳ',
    ],
    evidence: '🖼️ Bài luận phân tích đạo đức AI và bộ quy tắc cá nhân.',
    pdf: 'Báo cáo Bài tập 6 — AI có trách nhiệm.pdf',
    link: '#',
  },
};

// ── LOADER ────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

// ── DARK MODE ─────────────────────────────
const html = document.documentElement;
const darkToggle = document.getElementById('darkToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

darkToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ── NAVBAR ────────────────────────────────
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
  highlightNavLink();
});

hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'));
});

// Active nav link highlight
function highlightNavLink() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const links = document.querySelectorAll('.nav-links a, .nav-mobile a');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY + 120 >= sec.offsetTop) current = sec.id;
  });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// ── BACK TO TOP ───────────────────────────
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── REVEAL ON SCROLL ──────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── SKILL BARS ────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      if (fill) {
        const width = fill.getAttribute('data-width');
        setTimeout(() => { fill.style.width = width + '%'; }, 300);
      }
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-item').forEach(el => skillObserver.observe(el));

// ── PROJECT MODAL ─────────────────────────
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    const data = projects[id];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="modal-icon">${data.icon}</div>
      <div class="modal-title">${data.title}</div>

      <div class="modal-section">
        <h4>🎯 Mục tiêu</h4>
        <p>${data.objective}</p>
      </div>

      <div class="modal-section">
        <h4>⚙️ Quy trình thực hiện</h4>
        <ul>${data.process.map(step => `<li>${step}</li>`).join('')}</ul>
      </div>

      <div class="modal-section">
        <h4>🖼️ Hình ảnh minh chứng</h4>
        <p>${data.evidence}</p>
      </div>

      <div class="modal-links">
        <a href="#" class="modal-link">📄 ${data.pdf}</a>
        <a href="${data.link}" class="modal-link">🔗 Xem sản phẩm</a>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── SMOOTH SCROLL for all anchor links ────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});