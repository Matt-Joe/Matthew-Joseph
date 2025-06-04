  const toggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Load previously saved theme
  if (localStorage.getItem('theme') === 'light' || (!localStorage.getItem('theme') && !prefersDark)) {
    document.body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function (e) {
        const url = this.href;

        // Ignore external links or anchors
        if (
            url.startsWith('http') && !url.includes(location.hostname) ||
            url.startsWith('#') || this.target === '_blank'
        ) return;

        e.preventDefault();
        const overlay = document.getElementById('transition-overlay');
        overlay.classList.add('show');

        // Delay navigation until after animation
        setTimeout(() => {
            window.location.href = url;
        }, 500); // Matches the CSS transition duration
    });
});

// Optional: fade in from black on page load
window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.remove('show');
});

