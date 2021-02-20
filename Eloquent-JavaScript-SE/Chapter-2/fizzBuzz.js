console.log("\n(--- FIZZBUZZ ---)");

let number = 0;
for (var i = 0; i < 100; i++) {
  number += 1;

  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (number % 5 == 0) {
    console.log("BUZZ");
  } else if (number % 3 == 0) {
    console.log("FIZZ");
  } else {
    console.log(number);
  }
}
