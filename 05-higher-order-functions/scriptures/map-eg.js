const SCRIPTS = require("./scripts");

function map(array, transform) {
    let mapped = [];
    for (const element of array) {
        mapped.push(transform(element));
    }

    return mapped;
}
// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));
console.log(SCRIPTS.filter(s => s.direction == 'rtl').map(s => s.name));
