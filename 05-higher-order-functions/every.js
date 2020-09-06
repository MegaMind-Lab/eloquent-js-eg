'use strict'

function every(array, test) { 
    for (let element of array) {
        if(!test(element))
             return false;        
    }
    return true;
}


/*
  To build every on top of some, we can apply De Morgan’s laws, which state that a && b equals !(!a || !b). 
  This can be generalized to arrays, where all elements in the array match if there is no element in the array that does not match
*/
function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}


console.log(every([1, 3, 5], n => n < 10));
  // → true
console.log(every([2, 4, 16], n => n < 10));
  // → false
console.log(every([], n => n < 10));
  // → true

    
console.log(every2([1, 3, 5], n => n < 10));
  // → true
console.log(every2([2, 4, 16], n => n < 10));
  // → false
console.log(every2([], n => n < 10));
  // → true