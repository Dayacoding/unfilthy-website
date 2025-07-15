const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  if (window.location.pathname.includes('index.html') && window.scrollY < 100) {
    logo.style.color = '#FD841F';
  } else {
    logo.style.color = '#111111';
  }
});
