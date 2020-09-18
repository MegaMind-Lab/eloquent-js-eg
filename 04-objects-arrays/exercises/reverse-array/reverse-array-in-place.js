'use strict'

function reverseArrayInPlace(arr) {

    const length = Math.floor(arr.length / 2);

    for (let index = 0; index < length; index++) {
        const tmp = arr[index];
        arr[index] = arr[arr.length - 1 - index];
        arr[arr.length - 1 - index] = tmp;     
    }
    
    return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5]))