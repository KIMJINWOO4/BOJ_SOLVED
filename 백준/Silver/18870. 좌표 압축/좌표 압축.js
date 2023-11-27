let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0]);

let arr = input[1].split(' ').map(Number);

let arr2 = [...new Set(arr)];
arr2.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < arr2.length; i++)
  {
    myMap.set(arr2[i], i);
  }
ans = "";
for (x of arr) ans += myMap.get(x) + " ";
console.log(ans);