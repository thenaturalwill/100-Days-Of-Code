// The book asked for two digits
function min(numberOne, numberTwo) {
  if (numberOne <= numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

//Compareing Four Values using simple conditional logic
function minOfFour(numberOne, numberTwo, numberThree, numberFour) {
  if (
    numberOne <= numberTwo &&
    numberOne <= numberThree &&
    numberOne <= numberFour
  ) {
    return numberOne;
  } else if (
    numberTwo <= numberOne &&
    numberTwo <= numberThree &&
    numberTwo <= numberFour
  ) {
    return numberTwo;
  } else if (
    numberThree <= numberOne &&
    numberThree <= numberTwo &&
    numberThree <= numberFour
  ) {
    return numberThree;
  } else {
    return numberFour;
  }
}

console.log("Return the minimum!!!");
console.log("The minimum of 22 and 88 is: " + min(22, 88));
console.log("The minimum of 88 and 27 is: " + min(88, 27));
console.log("The minium of 33, 82, 48 and 21 is: " + minOfFour(33, 82, 48, 21));
console.log("The minium of 33, 22, 1 and 21 is: " + minOfFour(33, 22, 1, 21));
