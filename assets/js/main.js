/* ============================================================
   MAIN.JS — RANOJOY DAS PORTFOLIO
   ============================================================ */

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.boxShadow = '0 3px 0 #ffe600, 0 6px 20px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = '0 3px 0 #ffe600';
  }
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

// ── TYPEWRITER ──
const phrases = [
  'MySQL · Python · Power BI',
  'EDA · Predictive Modeling',
  'Turning data into decisions',
  'Open to analyst roles 🎮'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 40 : 75);
}
type();

// ── STAT COUNTER ──
function animateCount(el, target) {
  let count = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = count;
    if (count >= target) clearInterval(timer);
  }, 30);
}

const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target || el.textContent);
      animateCount(el, target);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));

// ── STICKER RANDOM WOBBLE ──
document.querySelectorAll('.sticker').forEach(sticker => {
  const randomRotate = (Math.random() * 30 - 15).toFixed(1) + 'deg';
  sticker.style.setProperty('--r', randomRotate);
});

// ── ACTIVE NAV LINK HIGHLIGHT ──
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#ffe600';
    }
  });
});
