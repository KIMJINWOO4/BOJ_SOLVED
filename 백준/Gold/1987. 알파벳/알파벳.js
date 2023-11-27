let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [r, c] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= r; i += 1) arr.push(input[i]);

let dx = [1, -1, 0, 0];
let dy = [0, 0, -1, 1];

let visited = Array.from({ length: 26 }, () => Array(26).fill(false));
let res = 0;

function dfs(x, y, depth) {
  res = Math.max(depth, res);

  for (let i = 0; i < 4; i += 1) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
    let char = arr[nx][ny].charCodeAt() - 'A'.charCodeAt();
    if (visited[char][arr[nx][ny].charCodeAt()]) continue;

    visited[char][arr[nx][ny].charCodeAt()] = true;
    dfs(nx, ny, depth + 1);
    visited[char][arr[nx][ny].charCodeAt()] = false;
  }
}

visited[arr[0][0].charCodeAt() - 'A'.charCodeAt()][arr[0][0].charCodeAt()] = true;
dfs(0, 0, 1);
console.log(res);
