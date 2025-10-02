document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate Name
    if (name.length < 2) {
      isValid = false;
      document.getElementById("nameError").textContent = "Please enter your name.";
    }

    // Validate Email
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById("emailError").textContent = "Enter a valid email.";
    }

    // Validate Message
    if (message.length < 5) {
      isValid = false;
      document.getElementById("messageError").textContent = "Message must be at least 5 characters.";
    }

    // Stop form submission if invalid
    if (!isValid) {
      e.preventDefault();
    }
  });
});
