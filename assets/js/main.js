/* ============================================================
   MAIN.JS — RANOJOY DAS PORTFOLIO (ENHANCED)
   ============================================================ */

(function () {
  'use strict';

  // ── UTILITIES ──
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // ══════════════════════════════════════════════════════════════
  // 1. PRELOADER + HERO ENTRANCE
  // ══════════════════════════════════════════════════════════════
  const preloader = $('#preloader');
  const hero = $('#home');

  window.addEventListener('load', () => {
    // Small delay so the preloader feels intentional
    setTimeout(() => {
      if (preloader) preloader.classList.add('loaded');
      if (hero) hero.classList.add('animate');

      // After hero entrance finishes, remove .animate so hover CSS works normally
      setTimeout(() => {
        if (hero) hero.classList.remove('animate');
      }, 1600);
    }, 600);
  });

  // ══════════════════════════════════════════════════════════════
  // 2. CONSOLIDATED SCROLL HANDLER
  // ══════════════════════════════════════════════════════════════
  const scrollProgress = $('#scroll-progress');
  const navbar = $('#navbar');
  const backToTop = $('#back-to-top');
  const heroStickers = $('.hero-stickers');

  function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // ── Scroll progress bar
    if (scrollProgress && docHeight > 0) {
      const pct = (scrollY / docHeight) * 100;
      scrollProgress.style.width = pct + '%';
    }

    // ── Navbar glassmorphism on scroll
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 60);
    }

    // ── Back-to-top visibility
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 500);
    }

    // ── Sticker parallax (hero only)
    if (heroStickers && scrollY < window.innerHeight * 1.2) {
      heroStickers.style.transform = 'translateY(' + (scrollY * 0.15) + 'px)';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial call

  // ── Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ══════════════════════════════════════════════════════════════
  // 3. MOUSE GLOW (DESKTOP ONLY)
  // ══════════════════════════════════════════════════════════════
  if (!isTouch) {
    const glow = $('#mouse-glow');
    if (glow) {
      let glowActive = false;
      document.addEventListener('mousemove', (e) => {
        if (!glowActive) {
          glow.classList.add('active');
          glowActive = true;
        }
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      });
      document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
        glowActive = false;
      });
    }
  }

  // ══════════════════════════════════════════════════════════════
  // 4. HAMBURGER MENU (ANIMATED)
  // ══════════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════════
  // 5. SCROLL REVEAL (ENHANCED + STAGGER)
  // ══════════════════════════════════════════════════════════════

  // Apply stagger delays to grid children
  $$('.projects-grid, .ml-grid, .rec-grid, .live-grid, .certs-grid, .skills-grid').forEach(grid => {
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

        // After animation, remove reveal classes so card hover transitions work cleanly
        setTimeout(() => {
          entry.target.classList.remove('reveal', 'visible');
          entry.target.style.transitionDelay = '';
        }, 1200);
      }
    });
  }, { threshold: 0.08 });

  reveals.forEach(el => revealObserver.observe(el));

  // ══════════════════════════════════════════════════════════════
  // 6. TYPEWRITER
  // ══════════════════════════════════════════════════════════════
  const phrases = [
    'MySQL · Python · Power BI',
    'EDA · Predictive Modeling',
    'Turning data into decisions',
    'Open to analyst roles 🎮'
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

  // ══════════════════════════════════════════════════════════════
  // 7. STAT COUNTER (SMOOTH EASING)
  // ══════════════════════════════════════════════════════════════
  function animateCount(el, target) {
    const duration = 1200;
    const start = performance.now();

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      el.textContent = Math.round(easedProgress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
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

  // ══════════════════════════════════════════════════════════════
  // 8. STICKER RANDOM WOBBLE
  // ══════════════════════════════════════════════════════════════
  $$('.sticker').forEach(sticker => {
    const randomRotate = (Math.random() * 30 - 15).toFixed(1) + 'deg';
    sticker.style.setProperty('--r', randomRotate);
  });

  // ══════════════════════════════════════════════════════════════
  // 9. TEXT SCRAMBLE ON SECTION LABELS
  // ══════════════════════════════════════════════════════════════
  function scrambleText(element) {
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$!%&';
    let iterations = 0;

    const interval = setInterval(() => {
      element.textContent = originalText.split('').map((char, index) => {
        if (index < iterations) return originalText[index];
        // Preserve non-alphanumeric characters (emojis, spaces, symbols)
        if (!/[A-Za-z0-9]/.test(char)) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      iterations += 0.5;
      if (iterations >= originalText.length) {
        element.textContent = originalText;
        clearInterval(interval);
      }
    }, 25);
  }

  const sectionLabels = $$('.section-label');
  const scrambleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrambleText(entry.target);
        scrambleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  sectionLabels.forEach(el => scrambleObserver.observe(el));

  // ══════════════════════════════════════════════════════════════
  // 10. 3D TILT ON CARDS (DESKTOP ONLY)
  // ══════════════════════════════════════════════════════════════
  if (!isTouch) {
    const tiltCards = $$('.ml-card, .rec-card, .skill-block');

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform =
          'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(-3px, -3px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ══════════════════════════════════════════════════════════════
  // 11. SMOOTH SCROLL WITH NAVBAR OFFSET
  // ══════════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════════
  // 12. ACTIVE NAV LINK HIGHLIGHT (INTERSECTION OBSERVER)
  // ══════════════════════════════════════════════════════════════
  const navSections = $$('section[id]');
  const navLinks = $$('.nav-links a:not(.nav-cta)');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === '#' + id;
          link.classList.toggle('active', isActive);
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-80px 0px -50% 0px'
  });

  navSections.forEach(section => navObserver.observe(section));

})();
