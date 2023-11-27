let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);

function backtrack(selected, start) {
    if (selected.length === m) {
        console.log(selected.join(' '));
        return;
    }

    for (let i = start; i < n; i += 1) {
        selected.push(numbers[i]);
        backtrack(selected, i);
        selected.pop();
    }
}

numbers.sort((a, b) => a - b);
backtrack([], 0);