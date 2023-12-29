let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);

function printQueens(arr, N) {
    console.log(N);
    let output = "";
    for (let i = 0; i < N; i += 1) output += " " + arr[i];
    console.log(output);
}

function placeQueens(N, arr) {
    if (N % 6 === 2) {
        let idx = 0;
        for (let i = 2; i <= N; i += 2) arr[idx++] = i - 1;
        arr[idx++] = 2;
        arr[idx++] = 0;
        for (let i = 7; i <= N; i += 2) arr[idx++] = i - 1;
        if (N !== 5) arr[idx++] = 4;
    } else if (N % 6 === 3) {
        let idx = 0;
        for (let i = 4; i <= N; i += 2) arr[idx++] = i - 1;
        arr[idx++] = 1;
        for (let i = 5; i <= N; i += 2) arr[idx++] = i - 1;
        arr[idx++] = 0;
        arr[idx++] = 2;
    } else {
        let idx = 0;
        for (let i = 2; i <= N; i += 2) arr[idx++] = i - 1;
        for (let i = 1; i <= N; i += 2) arr[idx++] = i - 1;
    }
    printQueens(arr, N);
}

for (let i = 1; i <= t; i += 1) {
    let n = Number(input[i]);
    let arr = new Array(n);
    placeQueens(n, arr);
}