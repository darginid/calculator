"use strict";
const input = document.querySelector(".calculator__display-value");
let currentInput = "0";
let previousInput = "";
let operator = null;
let isOperatorsClick = false;

function handleNumbersClick(event) {
  if (event.target.classList.contains("numbers__item")) {
    let value = event.target.textContent;
    if (currentInput === "0") {
      currentInput = value;
    } else {
      currentInput += value;
    }
    input.textContent = currentInput;
  }
}

function handleOperatorsClick(event) {
  if (
    event.target.classList.contains("operators__item") ||
    event.target.classList.contains("numbers__item")
  ) {

  }
}