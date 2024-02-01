let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(':fan::fan::fan:');
console.log(':fan::' + input[0] +'::fan:');
console.log(':fan::fan::fan:');