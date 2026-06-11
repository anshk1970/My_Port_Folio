
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(reveal => observer.observe(reveal));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    name.classList.remove("input-error");
    email.classList.remove("input-error");
    subject.classList.remove("input-error");
    message.classList.remove("input-error");

    let isValid = true;

    if (name.value.trim() === "") {
      nameError.textContent = "Name is required";
      name.classList.add("input-error");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      emailError.textContent = "Email is required";
      email.classList.add("input-error");
      isValid = false;
    }
    else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email address";
      email.classList.add("input-error");
      isValid = false;
    }

    if (subject.value.trim() === "") {
      subjectError.textContent = "Subject is required";
      subject.classList.add("input-error");
      isValid = false;
    }

  
    if (message.value.trim() === "") {
      messageError.textContent = "Message is required";
      message.classList.add("input-error");
      isValid = false;
    }
    else if (message.value.trim().length < 4) {
      messageError.textContent =
      "Message must be at least 10 characters";
      message.classList.add("input-error");
      isValid = false;
    }

    if (isValid) {

      successMessage.textContent =
      "✅ Form submitted successfully!";

      form.reset();
    }

  });

  document.querySelectorAll(
    "#contactForm input, #contactForm textarea"
  ).forEach(field => {

    field.addEventListener("input", () => {

      field.classList.remove("input-error");

    });

  });

}
