// Work - In Progress
// Scope is to create a working Calculator with HTML-CSS-JS
let runningTotalDisplay = document.getElementById("running_total");
let totalDisplay = document.getElementById("total_calculated");
let toDisplayCalc = true;
let runningTotal = "0";
let total = 0;

// Handeling of Window Event - Extra Feature
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

//Calculations
function calculate() {
  //handeling equals
  if (runningTotalDisplay.innerHTML.length <= 24) {
    runningTotalDisplay.innerHTML = runningTotal;
  } else {
    runningTotalDisplay.innerHTML = total.toString;
  }
  totalDisplay.innerHTML = parseFloat(runningTotal);
}

// Div Buttons
function autoclear() {}

function clear() {}

function sign() {}

function buttonPress(button) {
  if (runningTotal == "0") {
    runningTotal = button;
    runningTotalDisplay.innerHTML = runningTotal;
  } else if (runningTotalDisplay.innerHTML.length <= 24) {
    runningTotal += button;
    runningTotalDisplay.innerHTML = runningTotal;
  } else {
    runningTotal = total.toString();
    runningTotalDisplay.innerHTML = total.toString();
  }
}

//Keyboard Handeling
