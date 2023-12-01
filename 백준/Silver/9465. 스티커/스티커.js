let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let testCases = [];

for (let i = 1; i <= T * 3; i += 3) {
  testCases.push({n: Number(input[i]), topRow: input[i + 1].split(' ').map(Number), bottomRow: input[i + 2].split(' ').map(Number)});
}

function maxStickerScore(n, topRow, bottomRow) {
  let dp = Array.from({ length: n }, () => Array(3).fill(0));

  dp[0][0] = topRow[0];
  dp[0][1] = bottomRow[0];
  dp[0][2] = 0;

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]) + topRow[i];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + bottomRow[i];
    dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
  }

  return Math.max(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
}

for (let i = 0; i < T; i++) {
  let testCase = testCases[i];
  console.log(maxStickerScore(testCase.n, testCase.topRow, testCase.bottomRow));
}