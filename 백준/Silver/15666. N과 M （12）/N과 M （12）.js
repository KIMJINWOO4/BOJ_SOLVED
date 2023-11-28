let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);
let set = new Set();

function combination(selected, start) {
  if (selected.length === M) {
    set.add(selected.join(' '));
    return;
  }

  for (let i = start; i < N; i++) {
    selected.push(numbers[i]);
    combination(selected, i);
    selected.pop();
  }
}

numbers.sort((a, b) => a - b);
combination([], 0);

set.forEach((arr) => console.log(arr));