let runningTotalDisplay = document.getElementById("running-total");
let totalDisplay = document.getElementById("total-calculated");
let toDisplayCalc = true;
let darkMODE = false;

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

function darkMode() {
  let background = document.getElementsByTagName("body");
  let display = document.getElementById("calc-display");
  let body = document.getElementById("calculator");
  let open = document.getElementById("calc-open");
  let toggle = document.getElementById("toggle");
  let buttonStyleOne = document.getElementsByClassName("button-s-1");
  let buttonStyleTwo = document.getElementsByClassName("button-s-2");
  let buttonStyleThree = document.getElementsByClassName("button-s-3");
  let buttonStyleFour = document.getElementsByClassName("button-s-4");

  if (darkMODE == false) {
    background[0].style.background = "#333333";
    display.style.backgroundColor = "#03dac5";
    body.style.backgroundColor = "#121212";
    body.style.boxShadow = "0.1rem 0.2rem 0.4rem 0.1rem #003300";
    open.style.backgroundColor = "#BB86FC";
    open.style.color = "black";
    toggle.style.color = "whitesmoke";

    runningTotalDisplay.style.color = "#121212";
    totalDisplay.style.color = "#121212";

    for (i = 0; i <= 3; i++) {
      buttonStyleOne[i].style.backgroundColor = "#CF6679";
      buttonStyleOne[i].style.border = "2.5px solid #CF6679";
      buttonStyleOne[i].style.color = "#121212";
      buttonStyleThree[i].style.backgroundColor = "#03dac5";
      buttonStyleThree[i].style.border = "2.5px solid #03dac5";
      buttonStyleThree[i].style.color = "#121212";
    }

    for (i = 0; i <= 10; i++) {
      buttonStyleTwo[i].style.backgroundColor = "#121212";
      buttonStyleTwo[i].style.border = "2.5px solid #121212";
    }

    buttonStyleFour[0].style.backgroundColor = "#BB86FC";
    buttonStyleFour[0].style.border = "2.5px solid #BB86FC";
    buttonStyleFour[0].style.color = "#121212";

    darkMODE = true;
  } else {
    background[0].style.background = "aliceblue";
    display.style.backgroundColor = "rgba(206, 197, 197, 0.301)";
    body.style.backgroundColor = "whitesmoke";
    body.style.boxShadow = "0.1rem 0.2rem 0.4rem 0.1rem grey";
    open.style.backgroundColor = "rgb(100, 148, 237)";
    open.style.color = "aliceblue";
    toggle.style.color = "grey";

    runningTotalDisplay.style.color = "rgb(110, 109, 109)";
    totalDisplay.style.color = "rgb(110, 109, 109)";

    for (i = 0; i <= 3; i++) {
      buttonStyleOne[i].style.backgroundColor = "rgb(204, 204, 204)";
      buttonStyleOne[i].style.border = "2.5px solid rgb(204, 204, 204)";
      buttonStyleOne[i].style.color = "aliceblue";
      buttonStyleThree[i].style.backgroundColor = "rgb(173, 216, 230)";
      buttonStyleThree[i].style.border = "2.5px solid rgb(173, 216, 230)";
      buttonStyleThree[i].style.color = "aliceblue";
    }

    for (i = 0; i <= 10; i++) {
      buttonStyleTwo[i].style.backgroundColor = "whitesmoke";
      buttonStyleTwo[i].style.border = "2.5px solid whitesmoke";
    }

    buttonStyleFour[0].style.backgroundColor = "rgb(100, 148, 237)";
    buttonStyleFour[0].style.border = "2.5px solid rgb(100, 148, 237)";
    buttonStyleFour[0].style.color = "aliceblue";

    darkMODE = false;
  }

  console.log(darkMODE);
}
