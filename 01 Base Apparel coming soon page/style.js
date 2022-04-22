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
let tl = gsap.timeline({ defaults: { opacity: 0 } });

function init() {
  tl.from("#demo", { ease: "linear", autoAlpha: 0 });
  tl.from(".logo", { left: 10 }, "<0.5");
  tl.from(".info__title .light", { x: 80, ease: "back", duration: 1 });
  tl.from(".info__title .bold", { x: -80, ease: "back", duration: 1 }, "<0.3");
  tl.from(".info__desc", { y: 80, ease: "back" }, "<0.3");
  tl.from(".form", { transformOrigin: "left", scaleX: 0.4 }, "<0.5");
  tl.from(".right", { duration: 1.2, "clip-path": "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }, 0.5);
}

window.addEventListener("load", function () {
  init();
});
