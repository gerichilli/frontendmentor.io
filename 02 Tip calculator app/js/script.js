"use strict";

const tipAmountEl = document.getElementById("tip-amount");
const totalEl = document.getElementById("total");
const allFormEl = document.querySelectorAll(".form-element");
const billEl = document.getElementById("bill");
const numOfPeopleEl = document.getElementById("num-of-people");
const customTipEl = document.getElementById("custom");
const tipsEls = document.querySelectorAll("input[name=tips]");
const resetBtn = document.querySelector(".reset-btn");

function calcTip(bill, tip, numOfPeople) {
  if (!numOfPeople) return (0).toFixed(2);
  return ((bill * (tip / 100)) / numOfPeople).toFixed(2);
}

function calcTotal(bill, tip, numOfPeople) {
  if (!numOfPeople) return (0).toFixed(2);
  return ((bill * (tip / 100 + 1)) / numOfPeople).toFixed(2);
}

function getTipPercent() {
  let tipValue = 0;
  const checkedEl = Array.from(tipsEls).filter((el) => el.checked === true)[0];
  tipValue = checkedEl ? checkedEl.value : customTipEl.value;
  return tipValue;
}

function calc() {
  const bill = +billEl.value;
  const numOfPeople = +numOfPeopleEl.value;
  const tip = +getTipPercent();
  tipAmountEl.textContent = `$${calcTip(bill, tip, numOfPeople)}`;
  totalEl.textContent = `$${calcTotal(bill, tip, numOfPeople)}`;
}

function resetForm() {
  // Disable button
  resetBtn.disabled = true;

  // Reset bill value
  billEl.classList.add("form-control--reseted");
  billEl.value = "";

  // Reset number of people value
  numOfPeopleEl.classList.add("form-control--reseted");
  numOfPeopleEl.value = "";

  // Reset tip chosen option
  tipsEls.forEach((el) => (el.checked = false));
  customTipEl.value = "";

  // Reset the result
  calc();
  removeError(numOfPeopleEl);
}

function undoResetForm() {
  resetBtn.disabled = false;
  billEl.classList.remove("form-control--reseted");
  numOfPeopleEl.classList.remove("form-control--reseted");
}

function setError(el) {
  const parentEl = el.closest(".form-group");
  parentEl.classList.add("form-group--has-error");
  el.classList.add("form-control--has-error");
}

function removeError(el) {
  const parentEl = el.closest(".form-group");
  parentEl.classList.remove("form-group--has-error");
  el.classList.remove("form-control--has-error");
}

function moveCursorToEnd(el) {
  setTimeout(function () {
    el.selectionStart = el.selectionEnd = el.value.length;
    el.focus();
  }, 0);
}

function init() {
  resetForm();
  calc();
}

init();

// Listen to event
// Reset form
resetBtn.addEventListener("click", resetForm);

customTipEl.addEventListener("input", function () {
  if (customTipEl.value) tipsEls.forEach((el) => (el.checked = false));
});

allFormEl.forEach((el) => {
  ["change", "input"].forEach((event) =>
    el.addEventListener(event, function () {
      undoResetForm();
      calc();

      if (numOfPeopleEl.value === "0") {
        setError(numOfPeopleEl);
      } else {
        removeError(numOfPeopleEl);
      }
    })
  );
});
