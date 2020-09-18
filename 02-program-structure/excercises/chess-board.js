'use strict'

function isEven(num) {
    return num % 2 == 0;
}

function print(char) {
    process.stdout.write(char);
}

function printChesBoard(size, char) {

    char = char || '#';
    if (!isEven(size)) throw 'invalid chessboard size';


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (isEven(i) && isEven(j))
                print(char);
            else if (!isEven(i) && !isEven(j))
                print(char);
            else
                print(' ');
        }
        console.log('');
    }
}

printChesBoard(8, '$');



/* //book solution
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board); */
