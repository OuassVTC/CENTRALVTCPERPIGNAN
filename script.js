const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');

menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
