let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let res = "";

function hanoi(n, start, by, end) {
  if (n == 1)
    res += start + ' ' + end + '\n';
  else {
    hanoi(n - 1, start, end, by);
    res += start + ' ' + end + '\n';
    hanoi(n - 1, by, start, end);
  }
}

hanoi(Number(input[0]), 1, 2, 3);

let moves = res.trim().split('\n');
console.log(moves.length);
console.log(res.trim());
