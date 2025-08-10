document.documentElement.classList.remove('no-js');
const themeBtn = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('zdc-theme');
if (savedTheme === 'dark') document.documentElement.classList.add('dark');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('zdc-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
}
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));
const form = document.getElementById('ms-form');
if (form) {
  const steps = Array.from(form.querySelectorAll('.ms-step')); let idx = 0;
  const show = (i) => steps.forEach((s, n) => s.classList.toggle('active', n === i));
  form.addEventListener('click', (e) => {
    if (e.target.classList.contains('next')) { e.preventDefault(); if (form.checkValidity()) { idx = Math.min(idx+1, steps.length-1); show(idx); } else { form.reportValidity(); } }
    if (e.target.classList.contains('prev')) { e.preventDefault(); idx = Math.max(idx-1, 0); show(idx); }
  });
  show(0);
}