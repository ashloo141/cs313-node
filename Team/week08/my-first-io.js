const fs = require('fs');

// buff = fs.readFileSync(process.argv[2]).toString();
// var arr = buff.split("\n");
// console.log(arr.length - 1);

console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length -1);