let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let sum = [];
sum.push(0);
for (let i = 1; i <= n; i += 1) {
  sum.push(sum[i - 1] + arr[i - 1]);
}

let divSum = [];
let diviedCnt = {};
for (let i = 0; i <= n; i += 1) {
  divSum.push(sum[i] % m);
  if (divSum[i] in diviedCnt) diviedCnt[divSum[i]] += 1;
  else diviedCnt[divSum[i]] = 1;
}

let res = 0;
for (let i = 0; i < m; i++) {
  if (i in diviedCnt) res += parseInt(diviedCnt[i] * (diviedCnt[i] - 1) / 2);
}
console.log(res);