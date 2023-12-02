let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
let queries = input.slice(n + 1).map(line => line.split(' ').map(Number));

let prefixSum = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + arr[i - 1][j - 1];
  }
}

let result = [];
for (let [x1, y1, x2, y2] of queries) {
  let sum = prefixSum[x2][y2] - prefixSum[x2][y1 - 1] - prefixSum[x1 - 1][y2] + prefixSum[x1 - 1][y1 - 1];
  result.push(sum);
}

console.log(result.join('\n'));