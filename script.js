// Portfolio interactions
// ----------------------
// This file keeps the page lightweight: there are no frameworks or build
// tools. Each function below handles one small piece of page behavior.

const progressBar = document.querySelector('#progress-bar');
const menuButton = document.querySelector('.menu-button');
const navigationPanel = document.querySelector('.nav-panel');
const themeButton = document.querySelector('.theme-toggle');

// Show the visitor's position on the page in the thin bar at the top.
function updateScrollProgress() {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;

  progressBar.style.width = `${progress}%`;
}

// Apply a theme and remember it for the next visit.
function applyTheme(theme) {
  const isLightTheme = theme === 'light';

  document.body.classList.toggle('light-theme', isLightTheme);
  themeButton.querySelector('span').textContent = isLightTheme ? '\u263e' : '\u263c';
  themeButton.setAttribute(
    'aria-label',
    isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'
  );

  localStorage.setItem('portfolio-theme', theme);
}

const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) {
  applyTheme(savedTheme);
}

themeButton.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('light-theme')
    ? 'dark'
    : 'light';

  applyTheme(nextTheme);
});

// Open and close the mobile navigation.
menuButton.addEventListener('click', () => {
  const isOpen = navigationPanel.classList.toggle('open');

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen
    ? 'Close menu'
    : 'Open menu';
});

// Close the mobile navigation after choosing a section.
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navigationPanel.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Fade sections into view as they enter the viewport.
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();
