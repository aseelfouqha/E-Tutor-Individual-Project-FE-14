window.addEventListener('scroll', function() {
  const topNavbar = document.querySelector('.top-navbar');
  const bottomNavbar = document.querySelector('.bottom-navbar');
  if (window.scrollY > 50) {
    topNavbar.classList.add('scrolled');
    bottomNavbar.classList.add('scrolled');
  } else {
    topNavbar.classList.remove('scrolled');
    bottomNavbar.classList.remove('scrolled');
  }
});