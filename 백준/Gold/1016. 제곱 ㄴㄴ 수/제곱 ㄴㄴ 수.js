let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let arr = new Array(m - n + 1).fill(0);
let sq = Math.sqrt(m);

for (let i = 2; i <= sq; i += 1) {
    let pow = i * i;
    let start = Math.ceil(n / pow) * pow;

    for (let j = start; j <= m; j += pow) {
        if (j - n >= 0) arr[j - n] = 1;
    }
}

let res = arr.reduce((acc, val) => acc + (val === 0 ? 1 : 0), 0);
console.log(res);