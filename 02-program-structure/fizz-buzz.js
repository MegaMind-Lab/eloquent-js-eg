'use strict'

function divBy3(num) {
    return num % 3 == 0 ? true : false;
}

function divBy5(num) {
    return num % 5 == 0 ? true : false;
}

for (let index = 1; index <= 100; index++) {

    if (divBy3(index) && divBy5(index)) {
        console.log('FizzBuzz');
    } else if (divBy3(index)) {
        console.log('Fizz');
    } else if (divBy5(index)) {
        console.log('Buzz');
    } else {
        console.log(index);
    }

    // book solution  
    /* 
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n); 
    */

}