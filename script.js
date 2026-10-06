const themeBtn = document.getElementById('themeBtn');

function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="bi bi-sun-fill me-1"></i> Light Mode';
    themeBtn.className = 'btn btn-outline-light btn-sm';
  } else {
    document.body.classList.remove('dark-mode');
    themeBtn.innerHTML = '<i class="bi bi-moon-fill me-1"></i> Dark Mode';
    themeBtn.className = 'btn btn-outline-secondary btn-sm';
  }
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

themeBtn.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Automatically close mobile menu on click
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('navContent');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});

// Click-to-copy email functionality with Bootstrap Toast
function copyEmail() {
  const emailText = "jeroldwilson2000@gmail.com";
  navigator.clipboard.writeText(emailText).then(() => {
    const toastEl = document.getElementById('copyToast');
    const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
    toast.show();
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
}