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

// Logic to search and Input Field to find Givin Text
function countChar(stringToTest, charToFind) {
  let count = 0;
  let string = document.getElementById(stringToTest).value;
  let char = document.getElementById(charToFind).value;

  if (char.length < 2 && char.length > 0) {
    for (var i = 0; i < string.length; i++) {
      if (string.charAt([i]) === char) {
        count += 1;
      }
    }
  }
  // This is working, but it will not check for punctuation marks yet :(
  else if (char.length >= 2) {
    stringArrary = string.split(" ");
    console.log(stringArrary.length);
    console.log(stringArrary);
    for (var i = 0; i <= stringArrary.length; i++) {
      if (stringArrary[i] == char) {
        count += 1;
      }
    }
  } else {
    return alert("Please enter at least ONE character to search for.");
  }
  return alert(`${char} appears ${count} times in: \n\n ${string}`);
}
