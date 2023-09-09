// JavaScript for form validation
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");

    error.innerHTML = "";
    name.length()!==0;

    if (!name || !email || !message) {
      event.preventDefault();
      error.innerHTML = "Please fill out all fields.";
    }
  });
