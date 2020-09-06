const SCRIPTS = require("./scripts");
'use strict'

/*

  find which script has most number of characters 
  count -> accumulator
  [from(1234), to(1236)] -> currentValue

*/
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
}
  
console.log(SCRIPTS.reduce((a, b) => {
    let script = characterCount(a) < characterCount(b) ? b : a;
    return script
}));


/* without higher order functions */
let biggest = null;
for(let script of SCRIPTS) {
    if (biggest == null || characterCount(biggest) < characterCount(script)) {
        biggest = script;
    }
}
console.log(biggest)
