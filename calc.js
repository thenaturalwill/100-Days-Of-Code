runningTotal = [];
opperatorsUsed = [];
opperators = "+-/*np";
total = 0;
button = "/";

runningTotal.push("100");
runningTotal.push("200");
runningTotal.push("200");

console.log(runningTotal);

//compare the opperators use array to the opperatiors table
// n will be used to convert to negative  1 --> (-1)
// p will be used to convert to positive (-1) --> 1

// Turn this into a recursion function less reuse of code
//Addition
if (button == "+") {
  total = parseFloat(runningTotal[0]);
  for (i = 1; i < runningTotal.length; i++) {
    number = parseInt(runningTotal[i]);
    total = total + number;
  }
}
//Multipulcation
else if (button == "*") {
  total = parseFloat(runningTotal[0]);
  for (i = 1; i < runningTotal.length; i++) {
    number = parseFloat(runningTotal[i]);
    total = total * number;
  }
}
//Subtraction
else if (button == "-") {
  total = parseFloat(runningTotal[0]);
  for (i = 1; i < runningTotal.length; i++) {
    number = parseInt(runningTotal[i]);
    total = total - number;
  }
}
//Division
else if (button == "/") {
  total = parseFloat(runningTotal[0]);
  for (i = 1; i < runningTotal.length; i++) {
    number = parseInt(runningTotal[i]);
    total = total / number;
  }
} else {
  console.log("not detected");
}

console.log(total);
