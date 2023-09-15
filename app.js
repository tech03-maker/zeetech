"use strict";
const loader = document.getElementById("preloader");
setTimeout(() => {
  loader.style.display = "none";
}, 5000);
const name = document.getElementById("feedback-name");
const email = document.getElementById("feedback-email");
const message = document.getElementById("feedback-message");

const submitButton = document.getElementById("submitForm");
const errorParagraph = document.getElementById("error");
submitButton.addEventListener("submit", (e) => {
  const data = { name: name.value, email: email.value, message: message.value };
  e.preventDefault();
  if (name.value === "" || email.value === "" || message.value === "") {
    return;
  }
  submitButton.classList.add("loading");
  // submitButton.setAttribute('data-bs-toggle="modal', "modal");
  // submitButton.setAttribute("data-bs-target", "#modalId");
  fetch("https://zee-tech-21961-default-rtdb.firebaseio.com/feedbac.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        submitButton.classList.remove("loading");
        errorParagraph.style.display = "block";
        errorParagraph.innerText = "Feedback sent successfully";
        errorParagraph.style.color = "green";
        setTimeout(() => {
          errorParagraph.style.display = "none";
        }, 2000);
      }
    })
    .catch((err) => {
      submitButton.classList.remove("loading");
      if (err) {
        errorParagraph.style.display = "block";
      }
    });
  name.value = "";
  email.value = "";
  message.value = "";
  console.log(name.value, email.value, message.value);
});
