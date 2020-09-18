'use strict'

function add(value, list) {
    return { value: value,
             rest: list};
}

/* array to list */
function arrayToList(arr) {
 /* 
    // creates list in reverse order
    let obj = null;
    for (const value of arr) {
        obj = add(value, obj)
    } */

    let list = null;
    for (let index = arr.length-1; index >= 0; index--) {
        list = add(arr[index], list);
    }

    return list;
}

let list = arrayToList([1,2,3,4])
console.log(list);


/* list to array */
function listToArray(list) {
    
    let arr = [];
   
    for(let node = list; node; node = node.rest){
        arr.unshift(node.value);
    }

    return arr;
}

console.log(listToArray(list));

 
/*  prepend value at start of the list */
function prepend(value, list) {
    const newObj = add(value, list);
    newObj.rest = list;
    return newObj;

    //return add{value, list}; short version
}

// console.log(prepend(10, {value:20, rest:null}));
console.log(prepend(10, prepend(20, null)));


/* takes a list and a number and returns the element at the given position in the list */

function nth(list, position) {
    return listToArray(list)[position];
}

console.log(nth(arrayToList([10,20,30,40]), 2));


/* using recursion */
function nthRecursive(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nthRecursive(list.rest, n - 1); //list.rest helps you traverse down
}

console.log(nthRecursive(arrayToList([10,20,30,40,50]), 0));