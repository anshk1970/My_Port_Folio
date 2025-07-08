 const form = document.querySelector('.contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you!');
    form.reset();
  });

  
  const toggleBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
