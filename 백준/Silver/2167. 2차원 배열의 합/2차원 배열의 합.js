let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = [new Array(m + 1).fill(0)];
for (let i = 1; i <= n; i += 1) {
  arr.push([0,...input[i].split(' ').map(Number)]);
}

let k = Number(input[n + 1]);
let arr2 = [];
for (let idx = n + 2; idx <= n + k + 1; idx += 1) {
  let [i, j, x, y] = input[idx].split(' ').map(Number);
  arr2.push([i, j, x, y]);
}

let sum = [];
for (let i = 0; i <= n; i += 1) sum.push(new Array(m + 1).fill(0));
for (let i = 1; i <= n; i +=1) {
  for (let j = 1; j <= m; j+=1) {
    sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + arr[i][j];
  }
}

for (let idx = 0; idx < k; idx += 1) {
  let [i, j, x, y] = arr2[idx];
  let res = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1];
  console.log(res);
}