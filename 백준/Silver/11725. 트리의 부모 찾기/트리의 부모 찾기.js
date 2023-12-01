let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function findParents(N, edges) {
  const graph = {};
  for (let i = 1; i <= N; i++) {
      graph[i] = [];
  }

  for (const edge of edges) {
    const [u, v] = edge;
    graph[u].push(v);
    graph[v].push(u);
  }
  const parents = []; 
  function dfs(node, parent) {
    parents[node - 2] = parent;
    for (const neighbor of graph[node]) {
      if (neighbor !== parent) {
          dfs(neighbor, node);
        }
      }
   }
  dfs(1, 0);
  return parents;
}

const n = parseInt(input[0]);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

const parents = findParents(n, edges);
console.log(parents.join('\n'));