const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 8);
}, { passive: true });

hamburger?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
}));
