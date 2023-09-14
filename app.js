"use strict";
const loader = document.getElementById("preloader");
setTimeout(() => {
  loader.style.display = "none";
}, 5000);
const name = document.getElementById("feedback-name");
const email = document.getElementById("feedback-email");
const message = document.getElementById("feedback-message");

const submitButton = document.getElementById("submitForm");
submitButton.addEventListener("submit", (e) => {
  const data = { name: name.value, email: email.value, message: message.value };
  e.preventDefault();
  fetch("https://zee-tech-21961-default-rtdb.firebaseio.com/feedback.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
  console.log(name.value, email.value, message.value);
});
