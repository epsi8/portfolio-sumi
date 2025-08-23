
(function(){
  // Theme toggle with localStorage
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      btn.setAttribute('aria-pressed', current === 'dark' ? 'false' : 'true');
      btn.querySelector('[data-icon-dark]').classList.toggle('d-none', current === 'dark');
      btn.querySelector('[data-icon-light]').classList.toggle('d-none', current !== 'dark');
    });
  }

  // Contact form client-side check
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e){
      const name = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      const message = form.querySelector('[name=message]').value.trim();
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out name, email, and message.');
      }
    });
  }
})();
