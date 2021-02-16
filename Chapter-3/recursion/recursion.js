/* Books Example of a Recursion Function

function findSolution(target) {   // Start the Loop
  function find(start, history) {  // Recursion - Takes the current number and a string of how we got there
    if (start == target) { // Number is our target number - Return Current
      return history; // Returns the history string
    } else if (start > target) {  // Out of bounds
      return null;
    } else {  // Keep searching
      return (
        find(start + 5, "(" + history + "+ 5)") ||  // Return this String if not Null
        find(start * 3, "(" + history + "* 3)")  // Return this String if ^ is Null
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));

-----   Goals of Excersie   ------
1. Define a Recursive Function isEven
2. Accept any Number - Return a boolean - True=Even / False=Odd
3. Test the Numbers 50, 75 and -1
4. Find a solution to accpet negative numbers

/// Hints ////
Zero is Even  -  One is Odd
For any Number N, Its Evenness is the same as N-2

*/

function isEven(number) {
  function calculate(testValue) {
    if (testValue == 0) {
      return "Even";
    } else if (testValue == 1) {
      return "Odd";
    } else if (testValue < 0) {
      return calculate(testValue * -1);
    } else {
      return calculate(testValue - 2);
    }
  }
  return calculate(number - 2);
}

console.log("The Number is: " + isEven(50));
console.log("The Number is: " + isEven(75));
console.log("The Number is: " + isEven(-1));
console.log("The Number is: " + isEven(-4));
