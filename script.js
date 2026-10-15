const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

function setMenuOpen(open) {
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  siteNav?.classList.toggle('active', open);
}

menuToggle?.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false);
  }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (const link of smoothLinks) {
  link.addEventListener('click', (event) => {
    const target = event.currentTarget.getAttribute('href');
    if (target && target.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMenuOpen(false);
    }
  });
}
