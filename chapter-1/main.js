//LOOPING A TRIANGLE
// let count = 0;
// let triangle = "";
// while (count <= 7) {
//   triangle += "#";
//   console.log(triangle);
//   count++;
// }

// // FizzBuzz as a for-loop
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 && i % 5) {
//     console.log("FizzBuzz");
//   } else if (i % 3) {
//     console.log("Fizz");
//   } else if (i % 5) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // FizzBuzz as a function
// function fizzBuzz() {
//   for (let i = 0; i <= 100; i++) {
//     fizz = i % 3 == 0;
//     buzz = i % 5 == 0;
//     if (fizz && buzz) {
//       console.log("fizzbuzz");
//     } else if (fizz) {
//       console.log("fizz");
//     } else if (buzz) {
//       console.log("buzz");
//     } else console.log(i);
//   }
// }

// Chessboard
function chessBoard(size) {
  let board = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  console.log(board);
}

chessBoard(8);
