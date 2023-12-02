let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let items = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

function knapsack(n, k, items) {
    let dp = Array.from({length: n + 1}, () => Array(k + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= k; w++) {
            if (items[i - 1][0] <= w)
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - items[i - 1][0]] + items[i - 1][1]);
            else 
                dp[i][w] = dp[i - 1][w];
        }
    }
    return dp[n][k];
}

console.log(knapsack(n, k, items));
