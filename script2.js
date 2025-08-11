document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  mobileMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenu.classList.toggle('active');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  const pesanButtons = document.querySelectorAll('.btn-secondary');
  pesanButtons.forEach(button => {
      button.addEventListener('click', () => {
          alert('Fitur pemesanan akan segera hadir!');
      });
  });
});
