let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let m = Number(input[1]);
let arr = [];

for (let i = 2; i <= m + 1; i += 1) {
  arr.push(input[i].split(' ').map(Number));
}

function solution(computers, connections) {
  const infected = Array(computers + 1).fill(false);

  const graph = Array(computers + 1).fill().map(() => []);

  for (const connection of connections) {
    const [a, b] = connection;
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node) {
    infected[node] = true;
    for (const nextNode of graph[node]) {
      if (!infected[nextNode]) {
        dfs(nextNode);
      }
    }
  }
  dfs(1);
  const infectedCount = infected.filter((isInfected) => isInfected).length;
  return infectedCount - 1;
}

console.log(solution(n, arr));

