/* ============================================================
   MAIN.JS — RANOJOY DAS PORTFOLIO
   ============================================================ */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

  // ══════════════════════════════════════════════════════════
  // 1. PRELOADER + HERO ENTRANCE
  // ══════════════════════════════════════════════════════════
  const preloader = $('#preloader');
  const hero = $('#home');

  window.addEventListener('load', () => {
    setTimeout(() => {
      if (preloader) preloader.classList.add('loaded');
      if (hero) hero.classList.add('animate');
      setTimeout(() => { if (hero) hero.classList.remove('animate'); }, 1400);
    }, 400);
  });

  // ══════════════════════════════════════════════════════════
  // 2. SCROLL HANDLER (progress bar, navbar, back-to-top)
  // ══════════════════════════════════════════════════════════
  const scrollProgress = $('#scroll-progress');
  const navbar = $('#navbar');
  const backToTop = $('#back-to-top');

  function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollProgress && docHeight > 0) {
      scrollProgress.style.width = (scrollY / docHeight) * 100 + '%';
    }
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);
    if (backToTop) backToTop.classList.toggle('visible', scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ══════════════════════════════════════════════════════════
  // 3. HAMBURGER MENU
  // ══════════════════════════════════════════════════════════
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    $$('a', mobileMenu).forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ══════════════════════════════════════════════════════════
  // 4. SCROLL REVEAL (with stagger)
  // ══════════════════════════════════════════════════════════
  $$('.projects-grid, .certs-grid, .skills-grid, .timeline').forEach(grid => {
    $$('.reveal', grid).forEach((el, i) => {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  const reveals = $$('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => revealObserver.observe(el));

  // ══════════════════════════════════════════════════════════
  // 5. TYPEWRITER
  // ══════════════════════════════════════════════════════════
  const phrases = [
    'MySQL · Python · Power BI',
    'EDA · Statistical Analysis',
    'Turning data into decisions',
    'Open to data analyst roles'
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const typedEl = $('#typed-text');

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

  // ══════════════════════════════════════════════════════════
  // 6. STAT COUNTER
  // ══════════════════════════════════════════════════════════
  function animateCount(el, target) {
    const duration = 1200;
    const start = performance.now();
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const statNums = $$('.stat-num');
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

  // ══════════════════════════════════════════════════════════
  // 7. SMOOTH SCROLL WITH NAVBAR OFFSET
  // ══════════════════════════════════════════════════════════
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = $(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ══════════════════════════════════════════════════════════
  // 8. ACTIVE NAV LINK HIGHLIGHT
  // ══════════════════════════════════════════════════════════
  const navSections = $$('section[id]');
  const navLinks = $$('.nav-links a:not(.nav-cta)');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' });

  navSections.forEach(section => navObserver.observe(section));

})();
