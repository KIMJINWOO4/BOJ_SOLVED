let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let cityLeng = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);
let minCost = cost[0];


for (let i = 0; i < n; i++)
  {
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
  }
let res = BigInt(0);
for(let i = 0; i < n - 1; i++)
  {
    res += BigInt(cityLeng[i]) * BigInt(cost[i]);
  }
console.log(String(res));