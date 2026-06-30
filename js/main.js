const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger?.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
});
document.querySelectorAll('nav a').forEach(l => l.addEventListener('click', () => nav.classList.remove('open')));
