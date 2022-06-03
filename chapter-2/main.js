//Minimum
function min(num1, num2) {
  return Math.min(num1, num2);
}

console.log(min(111, 2));

//Recursion
function isEven(num) {
  let status = false;
  if (num > 0) {
    let newNum = parseInt(num);
    if (newNum % 2 === 0) {
      status = !status;
    } else {
      status;
    }
  } else {
    prompt("Please enter a positive number");
  }
  return status;
}

console.log(isEven(230.589707));

//Bean Counting
function countLetters(word, letter) {
  let count = 0;
  let stringedWord = word.toString();
  let stringedLetter = letter.toString();
  for (let i = 0; i < stringedWord.length; i++) {
    if (stringedWord[i] === stringedLetter) {
      count++;
    }
  }
  return count;
}

console.log(countLetters("barnaasrarabbB", "R"));
