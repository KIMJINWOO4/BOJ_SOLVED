let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let map = new Map();

for (let i = 1; i <= n; i += 1) {
  let [key, value] = input[i].split(' ');
  map.set(key, value);
}

for (let i = n + 1; i <= n + m; i += 1)
  console.log(map.get(input[i]));
