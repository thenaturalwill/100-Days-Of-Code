// Logic to search a text field for the supplied char or word phrase.
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
  // Phrase the search term to look for unsupported  chars
  else if (char.length >= 2) {
    let ignore = " .!?&%$#@^*()_-+={}[]:;><.,/\\'\"";
    let stringArrary = string.split(" ");
    try {
      for (var i = 0; i <= stringArrary.length; i++) {
        let s = stringArrary[i].length;
        // Test the last char of the word to see if it should be ignored
        for (var x = 0; x <= ignore.length; x++) {
          if (stringArrary[i][s - 1] == ignore.charAt([x])) {
            stringArrary[i] = stringArrary[i].substring(0, s - 1);
          }
        }
        if (stringArrary[i] == char) {
          count += 1;
        }
      }
    } catch {}
  } else {
    return alert("Please enter at least ONE character to search for.");
  }
  return alert(`${char} appears ${count} times in: \n\n ${string}`);
}
