/*
 * Implement FizzBuzz
 * 
 * iterate from 0 to 100
 * instead of multiples 3 print fizz
 * instead of multiples 5 print buzz
 * instead of multiples 3 and 5 (or 15) print FizzBuzz
 * otherwise print the number
 * 
 */
  
function fizzBuzz() {
    for (let i=0; i <= 100; i++) {
      fizz = i%3 == 0
      buzz = i%5 == 0
      if(fizz && buzz) {
        console.log('fizzbuzz')
      } 
      else if (fizz) {
        console.log('fizz')
      } 
      else if (buzz) {
        console.log('buzz')
      }
      else (console.log(i));
    }
  }
  
  
  