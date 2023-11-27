let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let arr = [];
for (let i = 1; i <= n; i += 1) {
  arr.push(input[i].split(''));
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let visited = new Array(n).fill(false).map(() => new Array(m).fill(false));

function dfs(x, y, cnt) {
  visited[x][y] = true;
  if (arr[x][y] == 'X') return cnt;
  if (arr[x][y] == 'P') cnt += 1;
  for (let i = 0; i < 4; i += 1) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (visited[nx][ny]) continue;
    if (arr[nx][ny] == 'X') continue;
    cnt = dfs(nx, ny, cnt);
  }
  return cnt;
}

let result = 0;
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    if (arr[i][j] == 'I') {
      result = dfs(i, j, 0);
      if (result === 0) console.log('TT');
      else console.log(result);
      return;
    }
  }
}