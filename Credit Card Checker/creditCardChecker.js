// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = myArray => {
  const reversedArray = [];

  for(let i = myArray.length - 1; i >= 0; i--) { //this reverses the order of myArray
    reversedArray.push(myArray[i]) //this appends the reversed-order to a new list named-reversedArray
  }
  for(let i=0; i < reversedArray.length; i++) { //this iterates through the reversedArray elements
    if(i === 0 || i % 2 === 0) {reversedArray[i] = reversedArray[i]} //this returns all the elements at even indexes unchanged
    else if (i % 2 !== 0) {reversedArray[i] = reversedArray[i]*2 //this doubles all elements at odd indexes
    if (reversedArray[i] > 9) {reversedArray[i]-= 9} //this checked if the doubled number is greater than 9. If yes, 9 is subtracted from the doubled number, else the original value is assumed.
    }
  }
 let myArraySum = 0; //this sets an initial counter for the sum of all elements in the reversedArray
 for(let i=0; i < reversedArray.length; i++) {myArraySum += reversedArray[i]} //this sums up all the elements in the reversedArray

 if (myArraySum % 10 === 0) return true; //this checks if the sum of all elements in the reversedArray is even or odd
 return false //if the sum is odd, print 'False' otherwise 'True'
}


let testArray = [3,6,8,2,9,0,2,1,7,0,1,8]
//validateCred(testArray);
//console.log(validateCred(testArray));
//console.log(validateCred(testArray)[4])


const findInvalidCards = cards => {
  let invalidCards = [];
  for(const card of cards) {
    if(validateCred(card) === false) {
      invalidCards.push(card);
      }
  }
  return invalidCards;
}

/*
console.log(validateCred(mystery1));
console.log(findInvalidCards(mystery1));
let nestedTestArray =[[3,6,8,2,9,0,2,1,7,0,1,8],[3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]]
console.log(validateCred(nestedTestArray));
console.log(findInvalidCards(nestedTestArray));
*/


const idInvalidCardCompanies = result => {
  let cardCompanies = [];
  for(let i=0; i<result.length; i++) {
    if(result[i][0] === 3) {cardCompanies.push('Amex (American Express)')}
    else if(result[i][0] === 4) {cardCompanies.push('Visa')}
    else if(result[i][0] === 5) {cardCompanies.push('Mastercard')}
    else if(result[i][0] === 6) {cardCompanies.push('Discover')}
    else cardCompanies.push('Company not found');
    }
  return cardCompanies;
  }

/*
let nestedTestArray =[[4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],[3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]]
console.log(validateCred(nestedTestArray));
console.log(findInvalidCards(nestedTestArray));
console.log(idInvalidCardCompanies(nestedTestArray));
*/

/*
If you’d like to challenge yourself further, you could consider the following:

1. Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.
2. To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
3. Create a function that will convert invalid numbers into valid numbers.
HINT:
If you need to convert strings to numbers, parseInt() can help you do that.
*/