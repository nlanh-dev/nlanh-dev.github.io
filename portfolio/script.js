/* ════════════════════════════════════════
   FUYU PORTFOLIO — script.js — Lan Anh 2026
════════════════════════════════════════ */

/* ── PROJECT DATA ──────────────────────── */
const PROJECTS = {
  1: {
    title: 'Quản lý dữ liệu cá nhân',
    objective: 'Xây dựng hệ thống tổ chức tệp và thư mục khoa học, đặt nền tảng cho thói quen quản lý dữ liệu số chuyên nghiệp từ đầu năm học.',
    steps: [
      'Khảo sát và đánh giá cấu trúc thư mục hiện tại trên máy tính',
      'Thiết kế hệ thống phân cấp theo chủ đề: Học tập → Môn học → Học kỳ',
      'Áp dụng quy tắc đặt tên: YYYY-MM-DD_TênTài liệu_v1.0',
      'Thiết lập lịch backup tự động lên Google Drive (hàng tuần)',
      'Tạo README.md mô tả cấu trúc thư mục để dễ tra cứu sau này',
    ],
    evidence: 'Ảnh chụp màn hình cấu trúc thư mục trước và sau khi tổ chức lại, kèm bảng so sánh thời gian tìm kiếm file.',
    pdf: 'https://drive.google.com/file/d/1BNpsVlGd7SaRH-kGm3vJldphEhyhm82M/view?usp=drive_link',
  },
  2: {
    title: 'Tìm kiếm học thuật',
    objective: 'Thành thạo kỹ năng tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin theo tiêu chí CRAAP — kỹ năng cốt lõi của mọi nhà nghiên cứu.',
    steps: [
      'Thực hành các toán tử Boolean: AND, OR, NOT, dấu " " cho cụm từ chính xác',
      'Tìm kiếm nâng cao trên Google Scholar với bộ lọc năm xuất bản và trích dẫn',
      'Áp dụng tiêu chí CRAAP: Currency · Relevance · Authority · Accuracy · Purpose',
      'Đánh giá 5 nguồn về chủ đề "AI trong giáo dục đại học"',
      'Lập bảng so sánh và tổng hợp danh sách tài liệu tham khảo đúng chuẩn APA',
    ],
    evidence: 'Bảng đánh giá CRAAP cho 5 nguồn tài liệu và ảnh chụp màn hình kết quả tìm kiếm Boolean.',
    pdf: 'Bài tập 02 — Tìm kiếm học thuật.pdf',
  },
  3: {
    title: 'Prompt Engineering',
    objective: 'Nắm vững nghệ thuật giao tiếp với AI — xây dựng Prompt theo mô hình CLEAR để có output chính xác, hữu ích và tiết kiệm thời gian.',
    steps: [
      'Nghiên cứu mô hình CLEAR: Context · Length · Examples · Adjustments · Review',
      'Thực nghiệm: cùng một câu hỏi, so sánh Prompt thô vs Prompt CLEAR',
      'Kiểm tra output trên cả ChatGPT-4o và Gemini 1.5 Pro',
      'Xây dựng thư viện 15 Prompt mẫu cho các tình huống học tập FinTech',
      'Phân tích sự khác biệt và thiên kiến giữa hai mô hình AI',
    ],
    evidence: 'Bảng so sánh output từ 5 cặp Prompt (thô/CLEAR) trên ChatGPT và Gemini.',
    pdf: 'Bài tập 03 — Prompt Engineering.pdf',
  },
  4: {
    title: 'Hợp tác trực tuyến',
    objective: 'Ứng dụng phương pháp Agile/Kanban và bộ công cụ Google Workspace để quản lý dự án nhóm hiệu quả trong môi trường học tập phi đồng bộ.',
    steps: [
      'Thiết lập board Trello với 5 cột: Backlog → To Do → In Progress → Review → Done',
      'Phân công vai trò: PM, Researcher, Designer, Writer cho mỗi sprint',
      'Sử dụng Google Docs với Comment để review và phản hồi real-time',
      'Tổ chức 3 buổi stand-up weekly qua Google Meet (15 phút/buổi)',
      'Retrospective cuối sprint: What went well / What to improve / Action items',
    ],
    evidence: 'Screenshot board Trello theo từng sprint, lịch sử revision Google Docs và biên bản họp nhóm.',
    pdf: 'Bài tập 04 — Hợp tác trực tuyến.pdf',
  },
  5: {
    title: 'Sáng tạo nội dung số',
    objective: 'Sản xuất nội dung truyền thông số chuyên nghiệp bằng cách kết hợp thiết kế Canva, dựng video CapCut và hỗ trợ kịch bản từ AI.',
    steps: [
      'Lên content brief: mục tiêu, đối tượng, thông điệp chính, tone of voice',
      'Thiết kế bộ infographic 3 slides "Kỹ năng số cho sinh viên FinTech" bằng Canva',
      'Viết script video 60 giây với ChatGPT, chỉnh sửa theo giọng điệu cá nhân',
      'Dựng video với CapCut: cut, transition, caption tự động, background music',
      'Tối ưu visual cho LinkedIn và Instagram (aspect ratio, font size, contrast)',
    ],
    evidence: 'File thiết kế Canva và link video đã publish, kèm analytics sau 48 giờ.',
    pdf: 'Bài tập 05 — Sáng tạo nội dung số.pdf',
  },
  6: {
    title: 'AI có trách nhiệm',
    objective: 'Phát triển framework tư duy phản biện về đạo đức AI, xây dựng bộ nguyên tắc cá nhân để sử dụng AI một cách có trách nhiệm trong học thuật và nghề nghiệp.',
    steps: [
      'Nghiên cứu 5 nguyên tắc AI có trách nhiệm: Transparency, Fairness, Accountability, Privacy, Safety',
      'Phân tích 3 case study: ChatGPT trong bài luận, deepfake trong FinTech, thuật toán tín dụng thiên kiến',
      'Xác định ranh giới giữa "AI hỗ trợ học tập" và "gian lận học thuật"',
      'Xây dựng bộ quy tắc cá nhân "My AI Ethics Charter" gồm 7 điều',
      'Viết bài phản tư về trải nghiệm dùng AI trong suốt học kỳ',
    ],
    evidence: 'Bài luận phân tích case study và bản "My AI Ethics Charter" đầy đủ.',
    pdf: 'Bài tập 06 — AI có trách nhiệm.pdf',
  },
};

/* ── LOADER ────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('out'), 2000);
});

/* ── CUSTOM CURSOR ─────────────────────── */
const cursorRing = document.getElementById('cursor');
const cursorDot  = document.getElementById('cursor-dot');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
});
function animateCursor() {
  cx += (mx - cx) * 0.14;
  cy += (my - cy) * 0.14;
  cursorRing.style.left = cx + 'px';
  cursorRing.style.top  = cy + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ── HERO CANVAS ───────────────────────── */
(function() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COLORS = ['#fda4af','#c4b5fd','#7dd3fc','#6ee7b7','#fdba74','#f9a8d4'];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * 1200, y: Math.random() * 900,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W+10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H+10) p.y = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    // Draw soft connecting lines
    ctx.globalAlpha = 0.05;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = particles[i].color;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── DARK MODE ─────────────────────────── */
const html = document.documentElement;
const darkBtn = document.getElementById('darkToggle');
const savedTheme = localStorage.getItem('fuyuTheme') || 'light';
html.setAttribute('data-theme', savedTheme);
darkBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('fuyuTheme', next);
});

/* ── NAVBAR ────────────────────────────── */
const navbar = document.getElementById('navbar');
const ham = document.getElementById('hamburger');
const navMob = document.getElementById('nav-mobile');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', scrollY > 40);
  backTop.classList.toggle('show', scrollY > 500);
  updateActiveLink();
});

ham.addEventListener('click', () => navMob.classList.toggle('open'));
navMob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMob.classList.remove('open')));

function updateActiveLink() {
  const sects = document.querySelectorAll('section[id], footer[id]');
  const links = document.querySelectorAll('.nav-links a');
  let cur = '';
  sects.forEach(s => { if (scrollY + 100 >= s.offsetTop) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}

backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── SMOOTH SCROLL ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── REVEAL ON SCROLL ──────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal-up').forEach(el => io.observe(el));

/* ── SKILL BARS ────────────────────────── */
const skillIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const fill = e.target.querySelector('.sbar-fill');
      if (fill) {
        setTimeout(() => { fill.style.width = fill.dataset.w + '%'; }, 200);
      }
      skillIO.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.sbar-item').forEach(el => skillIO.observe(el));

/* ── MODAL ─────────────────────────────── */
const modal    = document.getElementById('modal');
const modalBody= document.getElementById('modalBody');
const mclose   = document.getElementById('modalClose');

document.querySelectorAll('.pcard').forEach(card => {
  card.addEventListener('click', () => {
    const d = PROJECTS[card.dataset.id];
    if (!d) return;
    modalBody.innerHTML = `
      <div class="mdl-title">${d.title}</div>
      <div class="mdl-section">
        <h4>Mục tiêu</h4>
        <p>${d.objective}</p>
      </div>
      <div class="mdl-section">
        <h4>Quy trình thực hiện</h4>
        <ul>${d.steps.map(s=>`<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="mdl-section">
        <h4>Hình ảnh minh chứng</h4>
        <p>${d.evidence}</p>
      </div>
    <div class="mdl-btns">
    <a
        href="${d.pdf}"
        target="_blank"
        class="mdl-btn"
    >
        Báo cáo
    </a>
    <a
        href="${d.pdf}"
        target="_blank"
        class="mdl-btn"
    >
        Xem nhanh
    </a>

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
mclose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });