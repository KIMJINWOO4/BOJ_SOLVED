let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

function dfs(depth){
  if (depth == n - 1){
    let total = 0;
    let cur = 1;
    for (let i = 0; i < n - 1; i++){
      let nextN = result[i];
      let cost = graph[cur][nextN];
      if (cost == 0) return;
      total += cost;
      cur = nextN;
    }
    let cost = graph[cur][1];
    if (cost == 0) return;
    total += cost;
    minValue = Math.min(minValue, total);
  }
  for (let i = 2; i <= n; i++){
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

let n = Number(input[0]);
let graph = []
let result = []
let visited = new Array(11).fill(false);
for (let i = 0; i <= n; i++) graph.push([0])
for (let i = 1; i <= n; i++) {
  line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++)
    graph[i].push(line[j]);
}
let minValue = 1e9;
dfs(0);
console.log(minValue);