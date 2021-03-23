console.log("\n CHESS BOARD :)");

let checker = "";

for (var i = 0; i < 55; i++) {
  if (i % 11 == 0) {
    checker += "\n";
  }

  if (i % 2 == 0) {
    checker += "#";
  } else if (i % 2 == 1) {
    checker += " ";
  }
}

console.log(checker);