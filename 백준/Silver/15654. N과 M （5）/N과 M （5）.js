let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);

function backtrack(selected, visited) {
    if (selected.length === m) {
        console.log(selected.join(' '));
        return;
    }

    for (let i = 0; i < n; i += 1) {
        if (!visited[i]) {
            visited[i] = true;
            selected.push(numbers[i]);

            backtrack(selected, visited);

            selected.pop();
            visited[i] = false;
        }
    }
}

numbers.sort((a, b) => a - b);
backtrack([], Array(n).fill(false));