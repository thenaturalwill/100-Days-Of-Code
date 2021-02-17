/*
Write a function that counts all of the B's in a string
Then rewrite it to count a giving char on input.
*/

function countBs(toTest) {
  let count = 0;
  for (var i = 0; i < toTest.length; i++) {
    if (toTest.charAt([i]) == "B") {
      count += 1;
    }
  }
  return count;
}
console.log(countBs("Bahh Bahh Black Sheep"));

function countChar(stringToTest, charToFind) {
  let count = 0;
  for (var i = 0; i < stringToTest.length; i++) {
    if (stringToTest.charAt([i]) === charToFind) {
      count += 1;
    }
  }
  return alert(`There are ${count} ${charToFind}'s' in: ${stringToTest}`);
}

countChar(prompt("Enter a String:"), prompt("What Char Should I count??"));
