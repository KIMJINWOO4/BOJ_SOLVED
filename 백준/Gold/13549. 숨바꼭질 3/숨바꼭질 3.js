let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);

function findMinTime(N, K) {
  if (N >= K) {
      return N - K;
  }

  const visited = new Array(100001).fill(false);
  const queue = [];
  queue.push([N, 0]);

  while (queue.length > 0) {
      const [current, time] = queue.shift();

      if (current === K) {
          return time;
      }

      visited[current] = true;

      if (current * 2 <= 100000 && !visited[current * 2]) {
          queue.unshift([current * 2, time]);
      }

      if (current + 1 <= 100000 && !visited[current + 1]) {
          queue.push([current + 1, time + 1]);
      }

      if (current - 1 >= 0 && !visited[current - 1]) {
          queue.push([current - 1, time + 1]);
      }
  }
}

console.log(findMinTime(n, k));