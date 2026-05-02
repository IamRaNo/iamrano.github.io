<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ranojoy Das | Data Analyst</title>
<link rel="icon" href="favicon.ico">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
  :root {
    --bg: #080c14;
    --bg2: #0d1321;
    --surface: #111827;
    --surface2: #1a2235;
    --border: rgba(99,179,237,0.12);
    --accent: #38bdf8;
    --accent2: #818cf8;
    --accent3: #34d399;
    --text: #e2e8f0;
    --muted: #64748b;
    --card-glow: 0 0 30px rgba(56,189,248,0.06);
  }
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
  }

  /* ── NOISE TEXTURE OVERLAY ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }

  /* ── GRID BG ── */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── CURSOR GLOW ── */
  .cursor-glow {
    position: fixed;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
    z-index: 1;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 18px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(8,12,20,0.7);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    transition: all 0.3s;
  }
  nav.scrolled {
    padding: 12px 40px;
    background: rgba(8,12,20,0.95);
  }
  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--text);
    text-decoration: none;
    letter-spacing: -0.5px;
  }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 8px; align-items: center; }
  .nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 6px;
    transition: all 0.2s;
    letter-spacing: 0.3px;
  }
  .nav-links a:hover { color: var(--text); background: var(--surface); }
  .nav-links .nav-cta {
    color: var(--accent);
    border: 1px solid rgba(56,189,248,0.3);
    background: rgba(56,189,248,0.05);
  }
  .nav-links .nav-cta:hover { background: rgba(56,189,248,0.1); color: var(--accent); }

  /* ── SECTIONS ── */
  section, .hero { position: relative; z-index: 2; }
  .container { max-width: 1100px; margin: 0 auto; padding: 0 30px; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 0 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .orb1 {
    width: 500px; height: 500px;
    background: rgba(56,189,248,0.08);
    top: -100px; right: -100px;
    animation: orbFloat 8s ease-in-out infinite;
  }
  .orb2 {
    width: 350px; height: 350px;
    background: rgba(129,140,248,0.06);
    bottom: 0; left: -100px;
    animation: orbFloat 10s ease-in-out infinite reverse;
  }
  @keyframes orbFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.05); }
  }

  .hero-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;
    display: grid;
    grid-template-columns: 1fr 160px;
    gap: 40px;
    align-items: center;
    width: 100%;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(56,189,248,0.08);
    border: 1px solid rgba(56,189,248,0.2);
    color: var(--accent);
    font-size: 0.75rem;
    font-family: 'JetBrains Mono', monospace;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 24px;
    letter-spacing: 0.5px;
    animation: fadeSlideUp 0.6s ease both;
  }
  .badge-dot {
    width: 6px; height: 6px;
    background: var(--accent3);
    border-radius: 50%;
    animation: pulse 2s ease infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  .hero-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.9rem, 3.5vw, 3rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 16px;
    animation: fadeSlideUp 0.6s 0.1s ease both;
  }
  .hero-name .line1 { display: block; color: var(--text); }
  .hero-name .line2 {
    display: block;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.95rem;
    color: var(--muted);
    margin-bottom: 20px;
    animation: fadeSlideUp 0.6s 0.2s ease both;
  }
  .hero-role .typed-cursor { color: var(--accent); animation: blink 1s infinite; }
  @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

  .hero-desc {
    font-size: 1rem;
    color: #94a3b8;
    max-width: 520px;
    line-height: 1.8;
    margin-bottom: 36px;
    animation: fadeSlideUp 0.6s 0.3s ease both;
  }

  .hero-actions {
    display: flex;
    gap: 14px;
    align-items: center;
    margin-bottom: 0;
    animation: fadeSlideUp 0.6s 0.4s ease both;
  }
  .hero-actions a {
    height: 44px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .btn-primary i, .btn-outline i {
    font-size: 0.85rem;
    line-height: 1;
  }
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--accent);
    color: #080c14;
    font-weight: 700;
    font-size: 0.85rem;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s;
    letter-spacing: 0.2px;
    line-height: 1;
    border: none;
    white-space: nowrap;
  }
  .btn-primary:hover { background: #7dd3fc; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(56,189,248,0.3); }

  .btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid var(--border);
    color: var(--text);
    font-weight: 700;
    font-size: 0.85rem;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s;
    background: var(--surface);
    line-height: 1;
    white-space: nowrap;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
  .hero-socials {
    display: flex;
    gap: 10px;
    margin-top: 40px;
    animation: fadeSlideUp 0.6s 0.5s ease both;
  }
  .hero-socials a {
    width: 38px; height: 38px;
    display: flex; align-items: center; justify-content: center;
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--muted);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s;
    background: var(--surface);
  }
  .hero-socials a:hover { color: var(--accent); border-color: rgba(56,189,248,0.4); transform: translateY(-2px); background: rgba(56,189,248,0.05); }

  /* Hero stats */
  .hero-stats {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-self: center;
  }
  .stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 18px 16px;
    text-align: center;
    width: 100%;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transform: scaleX(0);
    transition: transform 0.3s;
  }
  .stat-card:hover::before { transform: scaleX(1); }
  .stat-card:hover { transform: translateY(-4px); border-color: rgba(56,189,248,0.2); }
  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 0.72rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* ── SECTION HEADER ── */
  .section-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-tag::before {
    content: '';
    width: 24px; height: 1px;
    background: var(--accent);
  }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 800;
    color: var(--text);
    letter-spacing: -1px;
    margin-bottom: 8px;
  }
  .section-sub {
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 48px;
  }

  /* ── SECTIONS ── */
  section { padding: 100px 0; }
  .section-inner { max-width: 1100px; margin: 0 auto; padding: 0 30px; }

  /* ── DIVIDER ── */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin: 0 30px;
    position: relative;
    z-index: 2;
  }

  /* ── PROJECTS ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .flip-card {
    height: 260px;
    perspective: 1000px;
    cursor: pointer;
  }
  .flip-inner {
    position: relative;
    width: 100%; height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .flip-card:hover .flip-inner { transform: rotateY(180deg); }
  .flip-front, .flip-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 14px;
    padding: 28px;
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .flip-front {
    background: var(--surface);
    transition: border-color 0.3s;
  }
  .flip-card:hover .flip-front { border-color: rgba(56,189,248,0.2); }
  .flip-back {
    background: linear-gradient(135deg, #0d1f35, #111827);
    border-color: rgba(56,189,248,0.2);
    transform: rotateY(180deg);
  }
  .project-emoji {
    font-size: 2.2rem;
    margin-bottom: 14px;
  }
  .flip-front h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
  }
  .flip-front p { color: var(--muted); font-size: 0.83rem; }
  .flip-hint {
    margin-top: auto;
    font-size: 0.7rem;
    color: rgba(56,189,248,0.5);
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 1px;
  }
  .flip-back h3 {
    font-size: 0.85rem;
    color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .flip-back p { color: #94a3b8; font-size: 0.83rem; line-height: 1.6; margin-bottom: 14px; }
  .tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; }
  .tags span {
    font-size: 0.7rem;
    padding: 3px 9px;
    border-radius: 4px;
    background: rgba(56,189,248,0.1);
    color: var(--accent);
    border: 1px solid rgba(56,189,248,0.2);
    font-family: 'JetBrains Mono', monospace;
  }
  .btn-small {
    font-size: 0.75rem;
    color: var(--accent);
    text-decoration: none;
    border: 1px solid rgba(56,189,248,0.3);
    padding: 5px 12px;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.2s;
    font-weight: 500;
  }
  .btn-small:hover { background: rgba(56,189,248,0.1); }

  /* ── ML PROJECTS ── */
  .ml-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .ml-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 22px 24px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .ml-card::after {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, var(--accent), var(--accent2));
    transform: scaleY(0);
    transition: transform 0.3s;
    border-radius: 0 2px 2px 0;
  }
  .ml-card:hover::after { transform: scaleY(1); }
  .ml-card:hover { transform: translateY(-3px); border-color: rgba(56,189,248,0.15); }
  .ml-icon {
    width: 40px; height: 40px;
    background: rgba(56,189,248,0.08);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    color: var(--accent);
    font-size: 1rem;
    flex-shrink: 0;
  }
  .ml-card h3 { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 4px; }
  .ml-card .goal { font-size: 0.8rem; color: #94a3b8; margin-bottom: 6px; }
  .ml-tech {
    font-size: 0.72rem;
    color: var(--accent2);
    font-family: 'JetBrains Mono', monospace;
    background: rgba(129,140,248,0.08);
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-block;
  }

  /* ── RECOMMENDATION ENGINES ── */
  .rec-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .rec-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px 20px;
    text-align: center;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .rec-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(56,189,248,0.04), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .rec-card:hover::before { opacity: 1; }
  .rec-card:hover { transform: translateY(-4px); border-color: rgba(56,189,248,0.2); }
  .rec-icon { font-size: 2.4rem; margin-bottom: 12px; }
  .rec-card h3 { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 6px; }
  .rec-card p { font-size: 0.8rem; color: var(--muted); }

  /* ── LIVE DEPLOYMENTS ── */
  .live-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 14px;
  }
  .app-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .app-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transform: scaleX(0);
    transition: transform 0.3s;
  }
  .app-card:hover::before { transform: scaleX(1); }
  .app-card:hover { transform: translateY(-3px); border-color: rgba(56,189,248,0.2); }
  .app-card img { width: 28px; height: 28px; }
  .app-name { font-size: 0.85rem; font-weight: 600; color: var(--text); display: block; margin-bottom: 3px; }
  .app-status { font-size: 0.72rem; color: var(--accent3); font-family: 'JetBrains Mono', monospace; }

  /* ── SKILLS ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .skill-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px;
    transition: all 0.3s;
  }
  .skill-block:hover { border-color: rgba(56,189,248,0.2); transform: translateY(-2px); }
  .skill-block-label {
    font-size: 0.7rem;
    font-family: 'JetBrains Mono', monospace;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .skill-block-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }
  .skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .skill-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 14px;
    font-size: 0.82rem;
    color: var(--text);
    transition: all 0.2s;
  }
  .skill-pill:hover { border-color: rgba(56,189,248,0.3); background: rgba(56,189,248,0.05); }
  .skill-pill img { width: 18px; height: 18px; }
  .skill-pill i { font-size: 1rem; }

  /* ── CERTIFICATIONS ── */
  .certs-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .cert-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: all 0.25s;
  }
  .cert-card:hover { border-color: rgba(56,189,248,0.2); transform: translateX(4px); }
  .cert-icon { font-size: 1.4rem; flex-shrink: 0; }
  .cert-info { flex: 1; min-width: 0; }
  .cert-info h4 { font-size: 0.85rem; font-weight: 600; color: var(--text); margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .cert-info span { font-size: 0.75rem; color: var(--muted); }
  .cert-link {
    font-size: 0.72rem;
    color: var(--accent);
    text-decoration: none;
    border: 1px solid rgba(56,189,248,0.25);
    padding: 4px 10px;
    border-radius: 5px;
    white-space: nowrap;
    transition: all 0.2s;
    font-family: 'JetBrains Mono', monospace;
    flex-shrink: 0;
  }
  .cert-link:hover { background: rgba(56,189,248,0.1); }

  /* ── CONTACT FOOTER ── */
  .contact-section {
    padding: 100px 0 60px;
    position: relative;
    z-index: 2;
  }
  .contact-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;
  }
  .contact-box {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 60px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .contact-box::before {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 200px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
  .contact-title {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -1px;
    margin-bottom: 10px;
  }
  .contact-title span { color: var(--accent); }
  .contact-sub { color: var(--muted); font-size: 0.9rem; margin-bottom: 40px; }
  .contact-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 50px;
  }
  .contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    background: var(--bg2);
    border: 1px solid var(--border);
    color: var(--text);
    font-size: 0.83rem;
    padding: 9px 16px;
    border-radius: 8px;
    transition: all 0.2s;
    font-weight: 500;
  }
  .contact-link:hover { color: var(--accent); border-color: rgba(56,189,248,0.3); transform: translateY(-2px); background: rgba(56,189,248,0.04); }
  .contact-link i { font-size: 0.9rem; }
  .footer-copy {
    font-size: 0.78rem;
    color: var(--muted);
    font-family: 'JetBrains Mono', monospace;
    border-top: 1px solid var(--border);
    padding-top: 30px;
  }

  /* ── SCROLL REVEAL ── */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--surface2); border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--muted); }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .hero-inner { grid-template-columns: 1fr; }
    .hero-stats { flex-direction: row; justify-content: flex-start; }
    .stat-card { min-width: 110px; }
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
    .ml-grid { grid-template-columns: 1fr; }
    .skills-grid { grid-template-columns: 1fr; }
    .certs-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    nav { padding: 14px 20px; }
    .projects-grid, .rec-grid { grid-template-columns: 1fr; }
    .hero-stats { flex-wrap: wrap; }
    .contact-box { padding: 40px 24px; }
    .nav-links a:not(.nav-cta) { display: none; }
  }
</style>
</head>
<body>

<div class="cursor-glow" id="cursorGlow"></div>

<!-- NAV -->
<nav id="navbar">
  <a href="#" class="nav-logo">RD<span>.</span></a>
  <div class="nav-links">
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#certs">Certs</a>
    <a href="#contact" class="nav-cta">Contact</a>
  </div>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="hero-bg-orb orb1"></div>
  <div class="hero-bg-orb orb2"></div>
  <div class="hero-inner">
    <div class="hero-left">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Available for opportunities
      </div>
      <h1 class="hero-name">
        <span class="line1">Ranojoy Das</span>
        <span class="line2">Data Analyst</span>
      </h1>
      <p class="hero-role">
        <span id="typed"></span><span class="typed-cursor">|</span>
      </p>
      <p class="hero-desc">
        Aspiring Data Analyst specializing in ML, Predictive Modeling, and Visualization — building solutions that turn raw data into real decisions.
      </p>
      <div class="hero-actions">
        <a href="https://drive.google.com/file/d/1XY-ErhYd2ve4-bMMQwIJdebSOFWfjD4B/view?usp=drive_link" target="_blank" class="btn-primary">
          <i class="fas fa-file-arrow-down"></i> View CV
        </a>
        <a href="https://github.com/IamRaNo" target="_blank" class="btn-outline">
          <i class="fab fa-github"></i> GitHub
        </a>
      </div>
      <div class="hero-socials">
        <a href="https://www.linkedin.com/in/ranojoy-das/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/IamRaNo" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="mailto:dasranojoy9@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
        <a href="https://x.com/i_am_rano_3" target="_blank" title="X / Twitter"><i class="fab fa-x-twitter"></i></a>
        <a href="https://www.kaggle.com/myselfranoranojoy" target="_blank" title="Kaggle"><i class="fab fa-kaggle"></i></a>
        <a href="https://leetcode.com/u/iamrano/" target="_blank" title="LeetCode"><i class="fas fa-code"></i></a>
        <a href="https://www.hackerrank.com/profile/dasranojoy9" target="_blank" title="HackerRank"><i class="fab fa-hackerrank"></i></a>
        <a href="https://thetshooter.blogspot.com/" target="_blank" title="Blog"><i class="fas fa-rss"></i></a>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-card reveal">
        <div class="stat-num">3+</div>
        <div class="stat-label">DA Projects</div>
      </div>
      <div class="stat-card reveal reveal-delay-1">
        <div class="stat-num">5</div>
        <div class="stat-label">Live Apps</div>
      </div>
      <div class="stat-card reveal reveal-delay-2">
        <div class="stat-num">14</div>
        <div class="stat-label">Certificates</div>
      </div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- FEATURED PROJECTS -->
<section id="projects">
  <div class="section-inner">
    <div class="section-tag reveal">Featured Work</div>
    <h2 class="section-title reveal">Data Analytics Projects</h2>
    <p class="section-sub reveal">Hover the cards to see details</p>
    <div class="projects-grid">
      <div class="flip-card reveal">
        <div class="flip-inner">
          <div class="flip-front">
            <div class="project-emoji">📦</div>
            <h3>Inside Olist</h3>
            <p>Review Score Impact Analysis</p>
            <div class="flip-hint">// hover to reveal →</div>
          </div>
          <div class="flip-back">
            <h3>// Overview</h3>
            <p>Analyzed 100k+ orders using MySQL and Python to identify poor rating drivers and patterns.</p>
            <div class="tags"><span>Python</span><span>Seaborn</span><span>Stats</span></div>
            <a href="https://github.com/IamRaNo/data-analytics-projects/tree/main/inside_olist_review_analysis" class="btn-small" target="_blank">View GitHub →</a>
          </div>
        </div>
      </div>
      <div class="flip-card reveal reveal-delay-1">
        <div class="flip-inner">
          <div class="flip-front">
            <div class="project-emoji">🎓</div>
            <h3>Beyond OULAD</h3>
            <p>Student Dropout Reason Analysis</p>
            <div class="flip-hint">// hover to reveal →</div>
          </div>
          <div class="flip-back">
            <h3>// Overview</h3>
            <p>Analyzed 30k+ student interactions using MySQL and Python to identify key dropout causes.</p>
            <div class="tags"><span>Python</span><span>MySQL</span><span>Stats</span></div>
            <a href="https://github.com/IamRaNo/data-analytics-projects/tree/main/beyond_oulad_student_dropout" class="btn-small" target="_blank">View GitHub →</a>
          </div>
        </div>
      </div>
      <div class="flip-card reveal reveal-delay-2">
        <div class="flip-inner">
          <div class="flip-front">
            <div class="project-emoji">🏥</div>
            <h3>About Synthea</h3>
            <p>Why Patients Readmit More</p>
            <div class="flip-hint">// hover to reveal →</div>
          </div>
          <div class="flip-back">
            <h3>// Overview</h3>
            <p>Combined 60k+ patient records across multiple tables to find hospital readmission patterns.</p>
            <div class="tags"><span>Python</span><span>MySQL</span><span>Stats</span></div>
            <a href="https://github.com/IamRaNo/data-analytics-projects/tree/main/about_synthea_patient_readmission" class="btn-small" target="_blank">View GitHub →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ML PROJECTS -->
<section>
  <div class="section-inner">
    <div class="section-tag reveal">Machine Learning</div>
    <h2 class="section-title reveal">Predictive Models</h2>
    <p class="section-sub reveal">Intelligence built from data</p>
    <div class="ml-grid">
      <div class="ml-card reveal">
        <div class="ml-icon"><i class="fas fa-users"></i></div>
        <div>
          <h3>Customer Segmentation & Recommendation</h3>
          <p class="goal">Group customers by purchasing behavior and demographics</p>
          <span class="ml-tech">K-Means Clustering</span>
        </div>
      </div>
      <div class="ml-card reveal reveal-delay-1">
        <div class="ml-icon"><i class="fas fa-laptop-code"></i></div>
        <div>
          <h3>Laptop Price Predictor</h3>
          <p class="goal">Estimate market value from device specifications</p>
          <span class="ml-tech">Regression</span>
        </div>
      </div>
      <div class="ml-card reveal reveal-delay-2">
        <div class="ml-icon"><i class="fas fa-heartbeat"></i></div>
        <div>
          <h3>Heart Disease Prediction</h3>
          <p class="goal">Early detection using patient vitals and clinical data</p>
          <span class="ml-tech">Random Forest</span>
        </div>
      </div>
      <div class="ml-card reveal reveal-delay-3">
        <div class="ml-icon"><i class="fas fa-smile"></i></div>
        <div>
          <h3>Sentiment Analyzer</h3>
          <p class="goal">Classify emotions and sentiment from text data</p>
          <span class="ml-tech">NLP · Bag of Words</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- RECOMMENDATION ENGINES -->
<section>
  <div class="section-inner">
    <div class="section-tag reveal">Recommendation Systems</div>
    <h2 class="section-title reveal">Engines</h2>
    <p class="section-sub reveal">Personalization at scale</p>
    <div class="rec-grid">
      <div class="rec-card reveal">
        <div class="rec-icon">🏏</div>
        <h3>Next Gen Cricketer</h3>
        <p>Talent prediction using statistical modeling</p>
      </div>
      <div class="rec-card reveal reveal-delay-1">
        <div class="rec-icon">✈️</div>
        <h3>Wander Mate</h3>
        <p>Travel destination engine based on user interests</p>
      </div>
      <div class="rec-card reveal reveal-delay-2">
        <div class="rec-icon">🎬</div>
        <h3>Movie Recommendation</h3>
        <p>Suggest movies based on viewing preferences</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- LIVE DEPLOYMENTS -->
<section>
  <div class="section-inner">
    <div class="section-tag reveal">Deployed</div>
    <h2 class="section-title reveal">Live Applications</h2>
    <p class="section-sub reveal">Production-ready tools, live right now</p>
    <div class="live-grid">
      <a href="https://huggingface.co/spaces/thetshooter/Wander_Mate" target="_blank" class="app-card reveal">
        <img src="https://img.icons8.com/color/48/airplane-take-off.png" alt="Wander Mate">
        <div>
          <span class="app-name">Wander Mate</span>
          <span class="app-status">● Live</span>
        </div>
      </a>
      <a href="https://huggingface.co/spaces/thetshooter/nextGenCricketer" target="_blank" class="app-card reveal reveal-delay-1">
        <img src="https://img.icons8.com/color/48/cricket.png" alt="Cricket">
        <div>
          <span class="app-name">Next Gen Cricketer</span>
          <span class="app-status">● Live</span>
        </div>
      </a>
      <a href="https://senti-analysis-ranoj.streamlit.app/" target="_blank" class="app-card reveal reveal-delay-2">
        <img src="https://img.icons8.com/color/48/happy--v1.png" alt="Sentiment">
        <div>
          <span class="app-name">Sentiment Analysis</span>
          <span class="app-status">● Live</span>
        </div>
      </a>
      <a href="https://huggingface.co/spaces/thetshooter/movieRecommendation" target="_blank" class="app-card reveal reveal-delay-3">
        <img src="https://img.icons8.com/color/48/movie-projector.png" alt="Movies">
        <div>
          <span class="app-name">Movie Recs</span>
          <span class="app-status">● Live</span>
        </div>
      </a>
      <a href="https://lap-price-pred-ranoj.streamlit.app/" target="_blank" class="app-card reveal">
        <img src="https://img.icons8.com/color/48/laptop.png" alt="Laptop">
        <div>
          <span class="app-name">Price Predictor</span>
          <span class="app-status">● Live</span>
        </div>
      </a>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- SKILLS -->
<section id="skills">
  <div class="section-inner">
    <div class="section-tag reveal">Toolkit</div>
    <h2 class="section-title reveal">Technical Skills</h2>
    <p class="section-sub reveal">Languages, tools, and frameworks I work with</p>
    <div class="skills-grid">
      <div class="skill-block reveal">
        <div class="skill-block-label">Languages & Databases</div>
        <div class="skill-items">
          <div class="skill-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"> Python</div>
          <div class="skill-pill"><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-sql-computer-programming-flaticons-flat-flat-icons.png" alt="SQL"> SQL</div>
          <div class="skill-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"> MySQL</div>
        </div>
      </div>
      <div class="skill-block reveal reveal-delay-1">
        <div class="skill-block-label">Data Analysis</div>
        <div class="skill-items">
          <div class="skill-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas"> Pandas</div>
          <div class="skill-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy"> NumPy</div>
          <div class="skill-pill"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg" alt="Excel"> Excel</div>
        </div>
      </div>
      <div class="skill-block reveal reveal-delay-2">
        <div class="skill-block-label">Visualization</div>
        <div class="skill-items">
          <div class="skill-pill"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI"> Power BI</div>
          <div class="skill-pill"><img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" alt="Matplotlib"> Matplotlib</div>
          <div class="skill-pill"><img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="Seaborn"> Seaborn</div>
        </div>
      </div>
      <div class="skill-block reveal reveal-delay-3">
        <div class="skill-block-label">Cloud & Concepts</div>
        <div class="skill-items">
          <div class="skill-pill"><i class="fab fa-aws" style="color:#FF9900"></i> AWS</div>
          <div class="skill-pill"><i class="fas fa-search" style="color:var(--accent)"></i> EDA</div>
          <div class="skill-pill"><i class="fas fa-brain" style="color:var(--accent2)"></i> ML</div>
          <div class="skill-pill"><i class="fas fa-chart-line" style="color:var(--accent3)"></i> Statistics</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- CERTIFICATIONS -->
<section id="certs">
  <div class="section-inner">
    <div class="section-tag reveal">Credentials</div>
    <h2 class="section-title reveal">Certifications</h2>
    <p class="section-sub reveal">14 verified certifications across data, cloud, and ML</p>
    <div class="certs-grid">
      <div class="cert-card reveal">
        <div class="cert-icon">🏆</div>
        <div class="cert-info"><h4>Data Science Job Simulation</h4><span>BCG X</span></div>
        <a href="https://drive.google.com/file/d/1hGFDw9U9BHqcV1z-EQsWf9dhmo8vLSAb/view?usp=sharing" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal reveal-delay-1">
        <div class="cert-icon">📊</div>
        <div class="cert-info"><h4>Data Analytics Job Simulation</h4><span>Deloitte</span></div>
        <a href="https://drive.google.com/file/d/1y2JJW_CqWR0AQRvwhpDZ2eRgHomEFrfO/view?usp=sharing" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">🚀</div>
        <div class="cert-info"><h4>Virtual Data Analysis Internship</h4><span>Elevvo Tech</span></div>
        <a href="https://drive.google.com/file/d/1JE0xgjJzQPkXuqjK6ze9dDZbWvR7LmMX/view?usp=sharing" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal reveal-delay-1">
        <div class="cert-icon">📈</div>
        <div class="cert-info"><h4>Career Forward Program</h4><span>McKinsey & Company</span></div>
        <a href="https://drive.google.com/file/d/1qKkLvYBkfzKg5vMXXSrwFxKKLpwga5Ts/view?usp=sharing" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">☁️</div>
        <div class="cert-info"><h4>AWS Fundamentals</h4><span>Amazon AWS</span></div>
        <a href="https://drive.google.com/file/d/1lxE7CrcZ3UzadX6PxSNrfnL0Gkfq639x/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal reveal-delay-1">
        <div class="cert-icon">💡</div>
        <div class="cert-info"><h4>Power BI Basics</h4><span>Microsoft</span></div>
        <a href="https://drive.google.com/file/d/1xd2rfsQvbLbU3QPEOR4RjvlDIrPHRp-R/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">🤖</div>
        <div class="cert-info"><h4>Machine Learning</h4><span>Besant Technologies</span></div>
        <a href="https://drive.google.com/file/d/1MRmwalrS-rHfq1C5yVtqO3kUREiIcmU1/view?usp=sharing" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal reveal-delay-1">
        <div class="cert-icon">🐍</div>
        <div class="cert-info"><h4>Python Basics</h4><span>HackerRank</span></div>
        <a href="https://drive.google.com/file/d/1bnl5GB-4p7FyC5pvHUFEc6NM9Y_kwhel/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">🧬</div>
        <div class="cert-info"><h4>Data Structure & Algo</h4><span>Simplilearn</span></div>
        <a href="https://drive.google.com/file/d/1oQioWbyEmlPhSQyew6WBp2ubAm-dr3RL/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal reveal-delay-1">
        <div class="cert-icon">🔍</div>
        <div class="cert-info"><h4>Data Fundamentals</h4><span>IBM</span></div>
        <a href="https://drive.google.com/file/d/1ZL00QbqKd1TUw-oLA1B2WMIB34Rdokt4/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">🧪</div>
        <div class="cert-info"><h4>Data Science</h4><span>Cisco / Cognitive Class</span></div>
        <a href="https://drive.google.com/file/d/1EuT95dfMqztDTRtWgs9iLVcx2ptkVWec/view?usp=sharing" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal reveal-delay-1">
        <div class="cert-icon">📋</div>
        <div class="cert-info"><h4>Data Analysis</h4><span>Microsoft</span></div>
        <a href="https://drive.google.com/file/d/1h2yCpM3IIhcDTyC5GYXlYhcNu0ACWfxX/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal">
        <div class="cert-icon">💻</div>
        <div class="cert-info"><h4>Python Developer Associate</h4><span>Certify Core</span></div>
        <a href="https://drive.google.com/file/d/16OgZezkUBGgPZgOzJco350bMo3nA5_m2/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
      <div class="cert-card reveal reveal-delay-1">
        <div class="cert-icon">✨</div>
        <div class="cert-info"><h4>Python For Data Science</h4><span>Cognitive Class</span></div>
        <a href="https://drive.google.com/file/d/1ArVELbLyF2drydtvv2oxLZzjSAitvvMg/view?usp=drive_link" target="_blank" class="cert-link">View</a>
      </div>
    </div>
  </div>
</section>
<!-- CONTACT -->
<div class="contact-section" id="contact">
  <div class="contact-inner">
    <div class="contact-box reveal">
      <h2 class="contact-title">Let's <span>Connect</span></h2>
      <p class="contact-sub">Open to data analyst roles, collaborations, and interesting projects.</p>
      <div class="contact-links">
        <a href="mailto:dasranojoy9@gmail.com" class="contact-link"><i class="fas fa-envelope"></i> Email</a>
        <a href="https://www.linkedin.com/in/ranojoy-das/" target="_blank" class="contact-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/IamRaNo" target="_blank" class="contact-link"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://x.com/i_am_rano_3" target="_blank" class="contact-link"><i class="fab fa-x-twitter"></i> X</a>
        <a href="https://www.facebook.com/rano.joy.333/" target="_blank" class="contact-link"><i class="fab fa-facebook"></i> Facebook</a>
        <a href="https://www.instagram.com/forgotten_humanbeing/" target="_blank" class="contact-link"><i class="fab fa-instagram"></i> Instagram</a>
        <a href="https://thetshooter.blogspot.com/" target="_blank" class="contact-link"><i class="fas fa-rss"></i> Blog</a>
        <a href="https://leetcode.com/u/iamrano/" target="_blank" class="contact-link"><i class="fas fa-code"></i> LeetCode</a>
        <a href="https://www.hackerrank.com/profile/dasranojoy9" target="_blank" class="contact-link"><i class="fab fa-hackerrank"></i> HackerRank</a>
        <a href="https://www.kaggle.com/myselfranoranojoy" target="_blank" class="contact-link"><i class="fab fa-kaggle"></i> Kaggle</a>
      </div>
      <div class="footer-copy">© 2025 Ranojoy Das — Built with purpose, not templates.</div>
    </div>
  </div>
</div>

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TWX0XV8QSP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TWX0XV8QSP');
</script>

<script>
  // Cursor glow
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Typewriter
  const phrases = [
    'MySQL · Python · Power BI',
    'EDA · Predictive Modeling',
    'Turning data into decisions',
    'Open to analyst roles'
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const typedEl = document.getElementById('typed');

  function type() {
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
    setTimeout(type, deleting ? 45 : 80);
  }
  type();

  // Stat counter animation
  function animateCount(el, target) {
    let count = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = (Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)) + (el.dataset.suffix || '');
      if (count >= target) clearInterval(timer);
    }, 30);
  }
  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.textContent.replace(/\D/g, '');
        const suffix = el.textContent.replace(/[0-9]/g, '').trim();
        el.dataset.suffix = suffix;
        animateCount(el, parseInt(raw));
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));
</script>
</body>
</html>
