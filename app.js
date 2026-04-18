/* Router + theme + variation toggles */
(function () {
  const main = document.getElementById('main');
  const navLinks = document.querySelectorAll('[data-route]');
  const themeBtn = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');
  const varButtons = document.querySelectorAll('.variation-toggle button');

  const STATE = {
    route: '/',
    variation: 'a',
    theme: localStorage.getItem('fy-theme') || 'light',
  };

  document.documentElement.setAttribute('data-theme', STATE.theme);
  // Variation locked to A

  themeBtn.addEventListener('click', () => {
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', STATE.theme);
    localStorage.setItem('fy-theme', STATE.theme);
    updateThemeIcon();
  });

  function parseHash() {
    const h = location.hash.replace(/^#/, '') || '/';
    return h.startsWith('/') ? h : '/' + h;
  }

  function render() {
    STATE.route = parseHash();
    const page = window.PAGES[STATE.route] || window.PAGES['/'];
    main.innerHTML = page(STATE.variation);
    window.scrollTo({ top: 0, behavior: 'instant' });
    navLinks.forEach(a => {
      const r = a.getAttribute('data-route');
      a.classList.toggle('active', r === STATE.route);
    });
  }

  function updateThemeIcon() {
    const dark = STATE.theme === 'dark';
    iconSun.style.display = dark ? 'none' : '';
    iconMoon.style.display = dark ? '' : 'none';
  }

  document.documentElement.setAttribute('data-theme', STATE.theme);
  updateThemeIcon();

  window.addEventListener('hashchange', render);

  if (!location.hash) location.hash = '#/';
  render();
})();
