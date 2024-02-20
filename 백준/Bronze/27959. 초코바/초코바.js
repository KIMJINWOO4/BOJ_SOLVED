let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

if (n * 100 >= m) console.log('Yes');
else console.log('No');