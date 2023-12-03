const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const triangle = input.slice(1).map(line => line.split(' ').map(Number));

const dp = new Array(n);
for (let i = 0; i < n; i++) {
    dp[i] = new Array(i + 1).fill(0);
}

dp[0][0] = triangle[0][0];

for (let i = 1; i < n; i += 1) {
    for (let j = 0; j <= i; j += 1) {
        const leftUpper = (j > 0) ? dp[i - 1][j - 1] : 0;
        const rightUpper = (j < i) ? dp[i - 1][j] : 0;
        dp[i][j] = Math.max(leftUpper, rightUpper) + triangle[i][j];
    }
}
const maxSum = Math.max(...dp[n - 1]);

console.log(maxSum);