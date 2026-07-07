const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav?.classList.toggle('active');
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
      siteNav?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
}
