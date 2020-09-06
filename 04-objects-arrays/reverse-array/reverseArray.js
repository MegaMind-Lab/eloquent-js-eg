'use strict'

function reverseArray(arr) {
    let revArr = new Array();
    for (let index = 0; index < arr.length; index++){
     revArr.unshift(arr[index]);
    }

    return revArr;
}

console.log(reverseArray([1,2,3,4,5,6]))