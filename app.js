AOS.init({ duration: 800, once: true, offset: 50 });

  new Typed('#typed', {
    strings: ['Frontend Developer', 'Web Designer', 'React Specialist', 'UI/UX Enthusiast'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    showCursor: false
  });

  // Mobile menu
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.navmenu ul');
  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
  });

  document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active nav highlight
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        document.querySelectorAll('.navmenu a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Form submission
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Rahmat! Xabaringiz qabul qilindi. Tez orada javob beraman.');
    e.target.reset();
  });