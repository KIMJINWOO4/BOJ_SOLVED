const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const box = [];
const queue = [];
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

for (let i = 1; i <= n; i += 1) {
  box.push(input[i].split(' ').map(Number));
  for (let j = 0; j < m; j++) {
    if (box[i - 1][j] === 1) {
      queue.push({ x: i - 1, y: j, days: 0 });
    }
  }
}

function bfs() {
  let maxDays = 0;
  let front = 0;

  while (front < queue.length) {
    let { x, y, days } = queue[front++];

    maxDays = days;

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && box[nx][ny] === 0) {
        box[nx][ny] = 1;
        queue.push({ x: nx, y: ny, days: days + 1 });
      }
    }
  }

  return maxDays;
}

let res = bfs();

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    if (box[i][j] === 0) {
      console.log(-1);
      process.exit();
    }
  }
}
console.log(res);
