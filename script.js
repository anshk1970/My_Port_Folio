 const form = document.querySelector('.contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you!');
    form.reset();
  });