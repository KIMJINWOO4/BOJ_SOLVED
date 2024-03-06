let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split(" ").map(Number);

let a = [1, 1, 2, 2, 2, 8];
let res = '';

for (let i = 0; i < a.length; i+=1)
  res += `${a[i] - arr[i]} `;
console.log(res.trim());