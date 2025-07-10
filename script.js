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

document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (!name || !email.includes("@")) {
    alert("Please fill in all fields correctly.");
    e.preventDefault();
  }
});
