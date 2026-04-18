/* Page renderers. Each returns an HTML string and is passed the current variation ("a" or "b"). */
(function () {
  const S = window.SITE;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const thumb = (label) => `
    <div class="paper-thumb"><span>${esc(label)}</span></div>
  `;

  const imgUrl = (path) => (path && path.startsWith('http')) ? path : (S.img + (path || ''));

  // Style "corresponding author" as a fancy badge
  const fancyAuthors = (html) => html.replace(
    /\(corresponding author\)/g,
    '<span style="display:inline-block;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--accent);border:1px solid var(--accent);padding:1px 6px;border-radius:2px;margin-left:4px;vertical-align:middle;line-height:1.6;">✱ corresponding author</span>'
  );

  const pubLinks = (links) => links && links.length
    ? `<div class="paper-links pub-links">${links.map(l => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>`
    : '';

  // --- HOME ---
  function home(v) {
    const heroHtml = `
      <section class="hero ${v === 'b' ? 'v-b' : ''}">
        <div class="hero-body">
          <div class="eyebrow">Researcher · Shanghai Qizhi Institute</div>
          <h1 class="display">Feiyu Yao — <em>reconstructing</em> worlds for embodied intelligence.</h1>
          <p class="lede">${esc(S.lede)}</p>
          <div class="hero-meta">
            <span><span class="dot"></span>Shanghai, China</span>
            <span><span class="dot"></span>3D Vision · AIGC · LLM</span>
            <span><span class="dot"></span>Previously: Huawei, Columbia</span>
          </div>
        </div>
        ${v === 'b' ? '' : `
          <div class="hero-portrait">
            <img src="${S.img}photo.jpg" alt="Feiyu Yao" style="width:100%;height:100%;object-fit:cover;">
          </div>
        `}
      </section>
    `;

    const nowHtml = `
      <section class="home-grid">
        <div class="label">Now</div>
        <div>
          <ul class="now-list">
            ${S.now.map(n => `
              <li>
                <span class="when">${esc(n.when)}</span>
                <span class="what">
                  <strong>${esc(n.where)}</strong>
                  <p>${esc(n.what)}</p>
                </span>
              </li>
            `).join('')}
          </ul>
        </div>
      </section>
    `;

    const featuredPapers = S.publications.filter(p => p.featured);
    const featuredHtml = `
      <section class="home-grid">
        <div class="label">Featured</div>
        <div style="display:flex;flex-direction:column;gap:28px;">
          ${featuredPapers.map(fp => `
          <div class="featured-paper">
            ${fp.thumb ? `<div class="paper-thumb" style="background:none;border:0;"><img src="${imgUrl(fp.thumb)}" alt="" style="width:100%;height:100%;object-fit:cover;"></div>` : thumb(fp.venue + ' ' + fp.year)}
            <div>
              <span class="venue-badge">${esc(fp.venue)} ${fp.year}</span>
              <h3>${esc(fp.title)}</h3>
              <div class="authors">${fancyAuthors(fp.authors)}</div>
              ${fp.note ? `<p class="prose" style="margin-top:10px;font-size:14px;">${esc(fp.note)}</p>` : ''}
              ${pubLinks(fp.links)}
            </div>
          </div>
          `).join('')}
        </div>
      </section>
    `;

    const personalHtml = `
      <section class="personal">
        <div class="home-grid" style="padding:0;border:0;">
          <div>
            <div class="eyebrow">Outside the lab</div>
            <h2 class="section" style="margin-top:16px;">Curiosity in motion.</h2>
          </div>
          <div>
            <p class="lede" style="font-size:17px;">Exploring the unknown is what drives me — whether that's an unsolved problem in 3D reconstruction, the right light at the right moment, or an untouched line down a mountain.</p>
          </div>
        </div>
        <div class="personal-grid">
          ${S.personal.map(p => `
            <div class="personal-card" style="aspect-ratio:auto;padding:28px;display:flex;flex-direction:column;justify-content:space-between;">
              <span class="kicker" style="position:static;">${esc(p.kicker)}</span>
              <div style="margin-top:auto;">
                <div style="font-family:var(--serif);font-size:28px;font-weight:500;letter-spacing:-0.02em;color:var(--ink);">${esc(p.caption)}</div>
                <div style="font-family:var(--mono);font-size:12px;color:var(--ink-3);margin-top:6px;letter-spacing:0.04em;">${esc(p.note)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    return `<div class="page">${heroHtml}${nowHtml}${featuredHtml}${personalHtml}</div>`;
  }

  // --- RESEARCH ---
  function research(v) {
    const byYear = {};
    S.publications.forEach(p => { (byYear[p.year] = byYear[p.year] || []).push(p); });
    const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

    const listStyle = `
      ${years.map(y => `
        <div class="pub-year">
          <div class="year">${y}</div>
          <div class="count">${byYear[y].length} ${byYear[y].length === 1 ? 'publication' : 'publications'}</div>
        </div>
        ${byYear[y].map(p => `
          <article class="pub">
            <div class="venue">${esc(p.venue)}<span class="year-small">${p.year}</span></div>
            <div>
              <h3 class="title">${esc(p.title)}</h3>
              <div class="authors">${fancyAuthors(p.authors)}</div>
              ${p.note ? `<div class="authors" style="font-style:italic;margin-top:4px;color:var(--ink-3);">${esc(p.note)}</div>` : ''}
              ${pubLinks(p.links)}
            </div>
          </article>
        `).join('')}
      `).join('')}
    `;

    const cardStyle = `
      ${S.publications.map(p => `
        <article class="pub-card">
          ${p.thumb ? `<div class="paper-thumb" style="background:none;border:0;"><img src="${imgUrl(p.thumb)}" alt="" style="width:100%;height:100%;object-fit:cover;"></div>` : thumb(p.venue.toLowerCase())}
          <div>
            <span class="venue-badge">${esc(p.venue)} ${p.year}</span>
            <h3 class="title">${esc(p.title)}</h3>
            <div class="authors">${fancyAuthors(p.authors)}</div>
            ${p.note ? `<div class="authors" style="font-style:italic;margin-top:6px;color:var(--ink-3);">${esc(p.note)}</div>` : ''}
            ${pubLinks(p.links)}
          </div>
          <div class="pub-card-meta">
            <span class="venue-strong">${esc(p.venue)}</span>
            ${p.year}
          </div>
        </article>
      `).join('')}
    `;

    return `
      <div class="page">
        <header style="margin-bottom:40px;">
          <div class="eyebrow">Research</div>
          <h1 class="display" style="margin-top:18px;font-size:clamp(38px,5vw,56px);">Publications.</h1>
          <p class="lede" style="margin-top:16px;">A running list of peer-reviewed papers and preprints. Starred work is first-author.</p>
          <div class="scholar">
            <div><span class="num">${S.publications.length}</span><span class="label">Papers</span></div>
            <div><span class="num">3</span><span class="label">First-author / corresp.</span></div>
            <div><span class="num"><a href="${S.scholar}" target="_blank" rel="noopener" style="color:inherit;">→</a></span><span class="label">Scholar profile</span></div>
          </div>
        </header>
        ${v === 'b' ? cardStyle : listStyle}
      </div>
    `;
  }

  // --- PROJECTS ---
  function projects(v) {
    const gridStyle = `
      <div class="project-grid">
        ${S.projects.map(p => `
          <article class="project-card">
            <div class="project-thumb">
              ${p.img ? `<img src="${S.img}${p.img}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">` : ''}
              <span class="tag">${esc(p.tag)}</span>
              <span class="label">${esc(p.year)}</span>
            </div>
            <div class="project-body">
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.desc)}</p>
              <div class="project-footer">
                <span>${p.stack.join(' · ')}</span>
                ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="arrow">Watch ↗</a>` : `<span class="arrow">—</span>`}
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;

    const listStyleHtml = `
      <div class="project-list" style="margin-top:36px;">
        ${S.projects.map((p, i) => `
          <div class="project-row">
            <div class="num">${String(i + 1).padStart(2, '0')}</div>
            <div>
              <h3>${esc(p.title)}</h3>
              <div class="desc">${esc(p.desc)}</div>
            </div>
            <div class="tags">
              ${p.stack.map(s => `<span class="pill">${esc(s)}</span>`).join('')}
            </div>
            <div class="link">
              ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">Watch ↗</a>` : `<span style="color:var(--ink-3)">${esc(p.year)}</span>`}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    return `
      <div class="page">
        <header style="margin-bottom:12px;">
          <div class="eyebrow">Projects</div>
          <h1 class="display" style="margin-top:18px;font-size:clamp(38px,5vw,56px);">Things I built along the way.</h1>
          <p class="lede" style="margin-top:16px;">A selection of coursework and side projects spanning robotics, control, perception, and multimodal learning.</p>
        </header>
        ${v === 'b' ? listStyleHtml : gridStyle}
      </div>
    `;
  }

  // --- CV ---
  function cv(v) {
    return `
      <div class="page">
        <header style="margin-bottom:32px;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;">
          <div>
            <div class="eyebrow">Curriculum Vitæ</div>
            <h1 class="display" style="margin-top:18px;font-size:clamp(38px,5vw,56px);">Feiyu Yao.</h1>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <a href="mailto:${S.email}" class="icon-btn" style="width:auto;padding:8px 14px;gap:8px;font-size:12px;text-decoration:none;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" style="width:14px;height:14px;"><path d="M4 4h16v16H4z"/><path d="M4 4l8 8 8-8"/></svg>
              ${esc(S.email)}
            </a>
            <a href="${S.scholar}" target="_blank" rel="noopener" class="icon-btn" style="width:auto;padding:8px 14px;gap:8px;font-size:12px;text-decoration:none;">Scholar ↗</a>
            <a href="${S.linkedin}" target="_blank" rel="noopener" class="icon-btn" style="width:auto;padding:8px 14px;gap:8px;font-size:12px;text-decoration:none;">LinkedIn ↗</a>
          </div>
        </header>

        <section class="cv-section">
          <div class="home-grid" style="padding:0;border:0;">
            <div class="label">Experience</div>
            <div>
              ${S.now.map(n => `
                <div class="cv-row">
                  <div class="when">${esc(n.when)}</div>
                  <div>
                    <strong>${esc(n.where.split('·')[0].trim())}</strong>
                    <span class="place">${esc(n.where.includes('·') ? n.where.split('·')[1].trim() : '')}</span>
                    <p>${esc(n.what)}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="cv-section">
          <div class="home-grid" style="padding:0;border:0;">
            <div class="label">Education</div>
            <div>
              ${S.education.map(e => `
                <div class="cv-row">
                  <div class="when">${esc(e.when)}</div>
                  <div>
                    <strong>${esc(e.title)}</strong>
                    <span class="place">${esc(e.place)}</span>
                    <p>${esc(e.detail)}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="cv-section">
          <div class="home-grid" style="padding:0;border:0;">
            <div class="label">Honors &amp; Awards</div>
            <div>
              ${S.awards.map(g => `
                <div class="award-group">
                  <h4>${esc(g.group)}</h4>
                  <ul>
                    ${g.items.map(it => `<li><span class="yr">${esc(it.yr)}</span><span>${esc(it.text)}</span></li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="cv-section">
          <div class="home-grid" style="padding:0;border:0;">
            <div class="label">Service</div>
            <div>
              <ul style="list-style:none;padding:0;margin:0;">
                ${S.service.map(s => `<li style="padding:8px 0;border-bottom:1px dashed var(--rule);color:var(--ink-2);font-size:14.5px;">${esc(s)}</li>`).join('')}
              </ul>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  window.PAGES = { '/': home, '/research': research, '/projects': projects, '/cv': cv };
})();
