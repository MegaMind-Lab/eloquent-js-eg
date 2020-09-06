const SCRIPTS = require("./scripts");
'use script';

// figuring out what script a piece of text is using
function characterScript(code) {
    for(let script of SCRIPTS) {
        // [from, to] destructuring 
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            // inside if
            return script;
        }
    }
    return null;
}

console.log(characterScript(3201));
