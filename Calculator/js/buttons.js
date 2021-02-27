//Keyboard Handeling
let equals = false;

function buttonPress(button) {
  if (equals == true) {
    if (button == "*" || button == "+" || button == "-" || button == "/") {
      runningTotal = 0;
      runningTotalDisplay.innerHTML = 0;
      equals = false;
    } else {
      runningTotal = 0;
      runningTotalDisplay.innerHTML = 0;
      equals = false;
    }
  }

  if (button == "=") {
    calculate();
    equals = true;
  } else {
    if (runningTotal == 0) {
      runningTotal = button;
      runningTotalDisplay.innerHTML = runningTotal;
    } else if (runningTotalDisplay.innerHTML.length <= 24) {
      runningTotal += button;
      runningTotalDisplay.innerHTML = runningTotal;
    } else {
      runningTotal = total;
      runningTotalDisplay.innerHTML = total;
    }
  }

  console.log(runningTotal);
  console.log(total);
  console.log(equals);
}
// Div Buttons
function clearCalc(type) {
  if (type == "AC") {
    runningTotal = 0;
    runningTotalDisplay.innerHTML = "";
    total = 0;
    totalDisplay.innerHTML = 0;
  } else {
    runningTotal = 0;
    runningTotalDisplay.innerHTML = "";
  }
}

function sign() {}
