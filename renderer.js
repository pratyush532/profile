// renderer.js — reads CONTENT[lang] and builds the whole page.
// Sections: render() → section templates → nav highlighting.

function render(lang) {
  const c = CONTENT[lang];
  const s = c.sections;

  /* ── NAV ── */
  const navItems = [
    [s.threeD.id,      c.nav.threeD],
    [s.projects.id,    c.nav.projects],
    [s.experience.id,  c.nav.experience],
    [s.education.id,   c.nav.education],
    [s.recognition.id, c.nav.recognition]
  ];

  document.getElementById('nav').innerHTML = `
    <a class="nav-name" href="#top">${c.name}</a>
    <div class="nav-links">
      ${navItems.map(([id, label]) => `<a href="#${id}" data-section="${id}">${label}</a>`).join('')}
    </div>
    <div class="nav-tools">
      <a class="lang-switch" href="${c.nav.langSwitchHref}">${c.nav.langSwitch}</a>
      <button class="theme-toggle" id="themeToggle" type="button" aria-label="${c.nav.theme}" title="${c.nav.theme}">
        <span class="theme-icon" aria-hidden="true"></span>
      </button>
    </div>
  `;

  document.getElementById('themeToggle').addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* private mode: theme just won't persist */ }
  });

  /* ── HEADER ── */
  const header = document.getElementById('header');
  header.innerHTML = `
    <div class="container hero" id="top">
      <div class="hero-text">
        <h1>${c.nameLines.map(line => `<span>${line}</span>`).join('')}</h1>
        <p class="role">${c.role}</p>
        ${c.intro.map(p => `<p class="intro">${p}</p>`).join('')}
        <ul class="social">
          ${c.social.map(l => `<li><a href="${l.href}" target="_blank" rel="noopener">${l.label}</a></li>`).join('')}
        </ul>
      </div>
      <figure class="portrait">
        <img src="${c.photo}" alt="${c.name}" width="440" height="550">
      </figure>
    </div>
  `;

  // If the photo file is missing, drop the frame and let the text take the full width
  header.querySelector('.portrait img').addEventListener('error', () => {
    header.querySelector('.portrait').hidden = true;
    header.querySelector('.hero').classList.add('hero-no-photo');
  });

  /* ── MAIN ── */
  document.getElementById('main').innerHTML = `
    ${renderThreeD(s.threeD)}
    ${renderProjects(s.projects)}
    ${renderExperience(s.experience)}
    ${renderEducation(s.education)}
    ${renderRecognition(s.recognition)}
  `;

  /* ── FOOTER ── */
  document.getElementById('footer').innerHTML =
    `<div class="container">© ${new Date().getFullYear()} ${c.footer}</div>`;

  initNavHighlight();
}

/* ───────────────────────── Section templates ───────────────────────── */

function sectionShell(sec, inner) {
  return `
    <section id="${sec.id}">
      <div class="container">
        <div class="section-head">
          <h2>${sec.title}</h2>
          ${sec.note ? `<p class="section-note">${sec.note}</p>` : ''}
        </div>
        ${inner}
      </div>
    </section>`;
}

function extLink(href, text, cls) {
  return `<a class="${cls || 'text-link'}" href="${href}" target="_blank" rel="noopener">${text}</a>`;
}

/* ── 3D / game dev: each tile is one big link ── */
function renderThreeD(sec) {
  const tiles = sec.items.map(i => `
    <li>
      <a class="tile" href="${i.link}" target="_blank" rel="noopener">
        ${i.image ? `<img class="tile-img" src="${i.image}" alt="" loading="lazy">` : ''}
        <span class="tile-title">${i.title}</span>
        <span class="tile-desc">${i.description}</span>
        <span class="tile-cta">${i.linkText}</span>
      </a>
    </li>`).join('');
  return sectionShell(sec, `<ul class="tiles">${tiles}</ul>`);
}

/* ── Projects ── */
function renderProjects(sec) {
  const rows = sec.items.map(i => `
    <article class="row">
      <div class="row-side">
        <h3>${i.title}</h3>
        ${i.status ? `<p class="status">${i.status}</p>` : ''}
        <p class="stack">${i.stack.join(', ')}</p>
      </div>
      <div class="row-main">
        <p class="summary">${i.summary}</p>
        <ul class="points">${i.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        ${i.award ? `<p class="award">${i.award}</p>` : ''}
        ${extLink(i.link, i.linkText)}
      </div>
    </article>`).join('');
  return sectionShell(sec, `<div class="rows">${rows}</div>`);
}

/* ── Experience ── */
function renderExperience(sec) {
  const rows = sec.items.map(i => `
    <article class="row">
      <div class="row-side">
        <p class="period">${i.period}</p>
      </div>
      <div class="row-main">
        <h3>${i.title}</h3>
        <p class="org">${i.org}${i.place ? `<span class="place">${i.place}</span>` : ''}</p>
        <ul class="points">${i.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
  return sectionShell(sec, `<div class="rows">${rows}</div>`);
}

/* ── Education ── */
function renderEducation(sec) {
  const rows = sec.items.map(i => `
    <article class="row row-compact">
      <div class="row-side">
        <p class="period">${i.period}</p>
      </div>
      <div class="row-main">
        <h3>${i.title}</h3>
        <p class="org">${i.sub}</p>
        <p class="meta">${i.meta}</p>
      </div>
    </article>`).join('');
  return sectionShell(sec, `<div class="rows">${rows}</div>`);
}

/* ── Awards + certifications, side by side ── */
function renderRecognition(sec) {
  const list = items => items.map(i => `
    <li>
      ${extLink(i.link, i.title, 'credit-link')}
      <span class="meta">${i.meta}</span>
    </li>`).join('');
  return sectionShell(sec, `
    <div class="credits">
      <div>
        <h3 class="credits-title">${sec.awardsTitle}</h3>
        <ul class="credit-list">${list(sec.awards)}</ul>
      </div>
      <div>
        <h3 class="credits-title">${sec.certsTitle}</h3>
        <ul class="credit-list">${list(sec.certs)}</ul>
      </div>
    </div>`);
}

/* ───────────────────────── Nav: mark the section in view ───────────────────────── */

function initNavHighlight() {
  const links = new Map();
  document.querySelectorAll('.nav-links a').forEach(a => links.set(a.dataset.section, a));

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.removeAttribute('aria-current'));
      const active = links.get(e.target.id);
      if (active) {
        active.setAttribute('aria-current', 'true');
        // keep the active link visible when the nav scrolls sideways on phones
        const bar = active.parentElement;
        if (bar.scrollWidth > bar.clientWidth) {
          bar.scrollTo({ left: active.offsetLeft - bar.clientWidth / 2 + active.offsetWidth / 2, behavior: 'smooth' });
        }
      }
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  document.querySelectorAll('main section').forEach(sec => io.observe(sec));
}