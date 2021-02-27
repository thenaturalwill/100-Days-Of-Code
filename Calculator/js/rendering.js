let runningTotalDisplay = document.getElementById("running_total");
let totalDisplay = document.getElementById("total_calculated");
let toDisplayCalc = true;

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
