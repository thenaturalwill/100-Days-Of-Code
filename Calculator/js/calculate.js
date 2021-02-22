// Work - In Progress
// Scope is to create a working Calculator with HTML-CSS-JS

let toDisplayCalc = true;
let displayTotal = "0";
let displayNumbers = "0";

function openCalc() {
  const DISPLAY = document.getElementById("calc-display");
  const BODY = document.getElementById("calc-body");

  if (toDisplayCalc == false) {
    DISPLAY.style.display = "block";
    BODY.style.display = "grid";
    toDisplayCalc = true;
  } else {
    DISPLAY.style.display = "none";
    BODY.style.display = "none";
    toDisplayCalc = false;
  }
}
