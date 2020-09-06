'use strict'

function printHash() {
    process.stdout.write("#");
}

for(let i=0; i<8; i++) {
    for (let index = 0; index <= i; index++) {
        printHash();
    }
    console.log('');
}


/* book solution */
/* 
for (let hash = "#"; hash.length < 8; hash += "#"){
 console.log(hash)   
} */
