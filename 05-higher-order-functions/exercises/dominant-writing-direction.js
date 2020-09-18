const SCRIPTS = require("../scriptures/scripts");
'use scripts'

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}


function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

/*
    Write a function that computes the dominant writing direction in a string of text. 
    Remember that each script object has a direction property that can be 
    "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
*/

function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    if (scripts.length == 0) return "ltr"; // special characters e.g. !@#$%

    const domDir = scripts.reduce((acc, curr) =>
        acc.count > curr.count ? acc.name : curr.name // scripts.reduce((a, b) => a.count > b.count ? a : b).name;
    );

    return domDir;
}

console.log(dominantDirection("?#$%^"));
// console.log(dominantDirection("Hello!"));
// → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// → rtl