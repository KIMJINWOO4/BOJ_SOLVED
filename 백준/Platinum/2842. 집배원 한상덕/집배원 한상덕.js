let input = require('fs').readFileSync('/dev/stdin');
let lines = input.toString().split('\n');

let n = Number(lines[0]);
let map = [];
let godo = [];

for (let i = 1; i <= n; i++) {
  map.push(lines[i].split(''));
}
for (let i = n + 1; i <= n * 2; i++) {
  godo.push(lines[i].split(' ').map(Number));
}

let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
let dy = [-1, 0, 1, -1, 1, -1, 0, 1];
let check = new Array(n).fill(null).map(() => new Array(n).fill(false));
function dfs(x, y) {
  check[x][y] = true;
  if (map[x][y] == 'K') cnt += 1;
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx <= -1 || ny <= -1 || nx >= n || ny >= n) continue;
    if (check[nx][ny] !== true) {
      if (godo[nx][ny] >= godoList[left] && godo[nx][ny] <= godoList[right]) dfs(nx, ny);
    }
  }
}

let setGodo = new Set();
let countK = 0;
let foundK = 1e9;
let playerX;
let playerY;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    setGodo.add(godo[i][j]);
    if (map[i][j] == 'P') {
      playerX = i;
      playerY = j;
    }
    if (map[i][j] == 'K') countK += 1;
  }
}

let godoList = [...setGodo];
godoList.sort((a, b) => a - b);

let left = 0;
let mid = 0;
let right = 0

for (let i = 0; i < godoList.length; i++) {
  if (godoList[i] == godo[playerX][playerY]) {
    mid = i;
    right = i;
    break;
  }
}

while (true) {
  while (true) {
    for (let i = 0; i < n; i++) {
      check[i].fill(false);
    }
    cnt = 0;
    dfs(playerX, playerY);
    if (right < godoList.length - 1 && cnt < countK) right += 1;
    else break;
  }
  if (cnt == countK) foundK = Math.min(foundK, godoList[right] - godoList[left]);
  left += 1;
  if (right >= godoList.length || left > mid) break;
}

console.log(foundK);