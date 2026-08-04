/* ============================================================
   MAIN.JS — RANOJOY DAS PORTFOLIO
   ============================================================ */

(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. HERO HEADLINE MASK REVEAL ─────────────────────── */
  const lines = $$('.reveal-line');
  window.requestAnimationFrame(() => {
    lines.forEach((line, i) => {
      setTimeout(() => line.classList.add('in'), reduceMotion ? 0 : 120 + i * 110);
    });
  });

  /* ── 2. SCROLL: progress, navbar, back-to-top ──────────── */
  const progress   = $('#scroll-progress');
  const navbar     = $('#navbar');
  const backToTop  = $('#back-to-top');
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (progress && h > 0) progress.style.width = (y / h) * 100 + '%';
    if (navbar) navbar.classList.toggle('scrolled', y > 40);
    if (backToTop) backToTop.classList.toggle('visible', y > 600);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    );
  }

  /* ── 3. MOBILE MENU ───────────────────────────────────── */
  const burger = $('#hamburger');
  const menu   = $('#mobileMenu');

  function closeMenu() {
    if (!burger || !menu) return;
    burger.classList.remove('active');
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  /* ── 4. STAGGERED SCROLL REVEAL ───────────────────────── */
  const revealables = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealables.forEach(el => io.observe(el));
  } else {
    revealables.forEach(el => el.classList.add('visible'));
  }

  /* ── 5. STAT COUNT-UP ─────────────────────────────────── */
  const nums = $$('.stat-num');
  function countUp(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    const dur = 1400;
    const start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }
  if ('IntersectionObserver' in window) {
    const numObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.6 });
    nums.forEach(n => numObs.observe(n));
  } else {
    nums.forEach(countUp);
  }

  /* ── 6. TYPED ROLE LINE ───────────────────────────────── */
  const typed = $('#typed-text');
  const phrases = [
    'Python · SQL · Power BI',
    'Turning raw data into real decisions',
    'Statistics over gut feeling'
  ];
  if (typed) {
    if (reduceMotion) {
      typed.textContent = phrases[0];
    } else {
      let pi = 0, ci = 0, deleting = false;
      const caret = document.createElement('span');
      caret.className = 'caret';
      caret.textContent = '_';
      const text = document.createElement('span');
      typed.append(text, caret);

      (function tick() {
        const phrase = phrases[pi];
        ci += deleting ? -1 : 1;
        text.textContent = phrase.slice(0, ci);
        let delay = deleting ? 32 : 62;
        if (!deleting && ci === phrase.length) { deleting = true; delay = 2000; }
        else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
        setTimeout(tick, delay);
      })();
    }
  }

  /* ── 7. ACTIVE NAV LINK ───────────────────────────────── */
  const sections = $$('section[id], header[id]');
  const navAnchors = $$('.nav-links a');
  if ('IntersectionObserver' in window && sections.length) {
    const secObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const id = '#' + e.target.id;
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => secObs.observe(s));
  }

  /* ── 8. PORTRAIT PARALLAX ─────────────────────────────── */
  const parallax = $$('[data-parallax]');
  if (parallax.length && !reduceMotion && window.matchMedia('(min-width: 1000px)').matches) {
    let pTick = false;
    window.addEventListener('scroll', () => {
      if (pTick) return;
      pTick = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        parallax.forEach(el => { el.style.transform = 'translateY(' + (-y * 0.06).toFixed(2) + 'px)'; });
        pTick = false;
      });
    }, { passive: true });
  }

  /* ── 9. CERTIFICATIONS TOGGLE ─────────────────────────── */
  const certsToggle = $('#certsToggle');
  if (certsToggle) {
    certsToggle.addEventListener('click', () => {
      const hidden = $$('.cert.is-hidden');
      if (hidden.length) {
        hidden.forEach((c, i) => {
          c.classList.remove('is-hidden');
          c.classList.add('reveal');
          c.style.setProperty('--d', (i * 45) + 'ms');
          requestAnimationFrame(() => c.classList.add('visible'));
        });
        certsToggle.innerHTML = 'Show less <i class="fas fa-arrow-up"></i>';
        certsToggle.setAttribute('aria-expanded', 'true');
      } else {
        $$('.cert').slice(6).forEach(c => {
          c.classList.add('is-hidden');
          c.classList.remove('visible');
        });
        certsToggle.innerHTML = 'Show all 14 <i class="fas fa-arrow-down"></i>';
        certsToggle.setAttribute('aria-expanded', 'false');
        $('#certs').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  }
})();
