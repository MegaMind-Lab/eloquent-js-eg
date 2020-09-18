'use strict'

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];  
    }
    return total;
}

function range(start, end, step) {
    if (step == null) {
        step = 1;
    }

    var array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }else {
        for (let i = start; i >= end;  i += step) {
            array.push(i);          
        }
    }

    return array;
}

console.log(sum(range(1, 10, 2)));