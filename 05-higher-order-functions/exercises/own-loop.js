'use strict'

function loop(value, testFoo, updateFoo, bodyFoo) {
    for (let index = value; testFoo(index); index = updateFoo(index)) {
        bodyFoo(index);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1