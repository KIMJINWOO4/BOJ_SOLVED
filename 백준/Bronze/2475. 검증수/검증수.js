let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split(" ").map(Number);
let res = 0;
for (let i = 0; i < arr.length; i++)
  res += arr[i]** 2;
console.log(res%10);