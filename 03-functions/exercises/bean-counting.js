'use strict'

function countChar(str, c) {
    return str.split('')
    .filter( ch => ch ===  c )
    .length;
}

function countBS(str) {
    return countChar(str,'B');
}

console.log(countBS('BBssBB'));
console.log(countChar('BBccBBss', 's'));