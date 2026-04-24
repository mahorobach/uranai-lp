// ===== 星空を生成 =====
function generateStars() {
  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      --duration: ${Math.random() * 4 + 2}s;
      --delay: ${Math.random() * 4}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    starsContainer.appendChild(star);
  }
}

// ===== アコーディオンの開閉 =====
function initAccordions() {
  const buttons = document.querySelectorAll('.accordion-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const isOpen = content.classList.contains('open');

      // 同じグループ内の他のアコーディオンを閉じる（任意）
      // すべて独立して開閉する仕様にしています

      if (isOpen) {
        // 閉じる
        content.classList.remove('open');
        btn.classList.remove('open');
        btn.querySelector('.btn-text').textContent = btn.getAttribute('data-open-text');
      } else {
        // 開く
        content.classList.add('open');
        btn.classList.add('open');
        btn.querySelector('.btn-text').textContent = btn.getAttribute('data-close-text');
      }
    });
  });
}

// ===== スクロールアニメーション =====
function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ===== ヘッダーの初期アニメーション =====
function initHeaderAnimation() {
  document.querySelectorAll('header .fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 200 + 100);
  });
}

// ===== ページ読み込み時に実行 =====
document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  initAccordions();
  initScrollAnimation();
  initHeaderAnimation();
});
