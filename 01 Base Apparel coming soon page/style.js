"use strict";

/* VALIDATE EMAIL */
const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");
const formError = document.querySelector(".form-error");
const formErrorIcon = document.querySelector(".form-error-icon");

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function displayFormError() {
  const email = emailEl.value;

  if (!validateEmail(email) || email === "") {
    formError.style.opacity = 1;
    formErrorIcon.style.opacity = 1;
  } else {
    formEl.submit();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  displayFormError();
});

form.addEventListener("keydown", function (event) {
  event.preventDefault;
  displayFormError();
});

emailEl.addEventListener("change", function () {
  formError.style.opacity = 0;
  formErrorIcon.style.opacity = 0;
});

/* TIMELINE */
let tl = gsap.timeline();
tl.from("#demo", { opacity: 0 });
tl.from(".logo", { left: 10, opacity: 0 }, "<0.5");
tl.from(".info__title .light", { x: 80, opacity: 0, ease: "back", duration: 0.8 });
tl.from(".info__title .bold", { x: -80, opacity: 0, ease: "back", duration: 0.8 }, "<0.3");
tl.from(".info__desc", { y: 80, opacity: 0 }, "<0.3");
tl.from(".form", { transformOrigin: "left", scaleX: 0.4, opacity: 0 });
tl.from(".right", { duration: 1.2, "clip-path": "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }, 0.5);
