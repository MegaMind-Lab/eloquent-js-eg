const SCRIPTS = require("./scripts");

function filter(array, test) {
    let passed = [];
    for (const element of array) {
        if(test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// console.log(SCRIPTS.filter(s => s.name == 'Kannada'));
  // → [{name: "Adlam", …}, …]