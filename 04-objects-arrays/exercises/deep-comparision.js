'use strict'

function deepEqual(a, b) {

    if (a === b) return true;
  
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;     
}

let obj1 = new Object(); 
obj1 = {
    address: "bangalore",
    name: "rishi",
};

let obj2 = new Object();

obj2 = {
    address: {HNO: 1},
    name: "tanay",
};

let obj3 = {
    address: "bangalore",
    name: "rishi",
};

let obj4 = {
    address: {HNO: 1},
    name: "tanay",
}


// console.log(deepEqual(obj1, obj2)); // false 
console.log(deepEqual(obj2, obj4)); //  true
// console.log(deepEqual(obj1, obj1)); // true
// console.log(deepEqual(obj1, obj3)); // true




/* // using iteration does't work on deep nested objects
function deepEqual(object1, object2) {

  let isEqual = false;  
  for (const key in object1) {
      if (object1.hasOwnProperty(key) && object2.hasOwnProperty(key)) {
          if(object1[key] === object2[key]) {
              isEqual = true;
          }
          else{
              return false;
          }
      }
  }

  return isEqual;
} */