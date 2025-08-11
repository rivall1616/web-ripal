function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  const imageOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px 50px 0px"
  };

  const imageObserver = new IntersectionObserver((entries, imageObserver) => {
      entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          
          const img = entry.target;
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
      });
  }, imageOptions);

  images.forEach(image => {
      imageObserver.observe(image);
  });
});
