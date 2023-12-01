let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

function drawStar(y, x, map, size) {
  let basePattern = ["  *  ", " * * ", "*****"];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      map[y + i][x + j] = basePattern[i][j];
    }
  }
}

function solve(n, y, x, map) {
  if (n === 3) {
    drawStar(y, x, map, n);
    return;
  }

  let newN = n / 2;
  solve(newN, y, x + newN, map);
  solve(newN, y + newN, x, map);
  solve(newN, y + newN, x + newN * 2, map);
}

function printMap(map, n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      row += map[i][j] || ' ';
    }
    console.log(row);
  }
}

let map = Array.from({ length: n }, () => Array(2 * n - 1).fill(' '));
solve(n, 0, 0, map);
printMap(map, n);