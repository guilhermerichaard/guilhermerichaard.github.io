const buttons = document.querySelectorAll('.mode-button');
const recruiter = document.querySelectorAll('.recruiter-view');
const engineer = document.querySelectorAll('.engineer-view');

function setMode(mode) {
  buttons.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  recruiter.forEach((element) => element.classList.toggle('hidden', mode !== 'recruiter'));
  engineer.forEach((element) => element.classList.toggle('hidden', mode !== 'engineer'));

  try {
    localStorage.setItem('portfolio-mode', mode);
  } catch (_) {
    // The portfolio still works when storage is unavailable.
  }
}

buttons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));

try {
  const saved = localStorage.getItem('portfolio-mode');
  if (saved === 'engineer' || saved === 'recruiter') setMode(saved);
} catch (_) {
  // Default recruiter mode is already rendered in HTML.
}
