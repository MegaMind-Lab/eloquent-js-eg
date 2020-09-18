const SCRIPTS = require("./scripts");
'use strict'

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
  }
  
console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)))
);
// → 1165

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)))
);
// → 204

/* without higher order function */

let total = 0, count = 0;
for(let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}

console.log(Math.round(total/count));
