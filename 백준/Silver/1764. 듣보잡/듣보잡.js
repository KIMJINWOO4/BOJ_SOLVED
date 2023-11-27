let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arrSet = new Set();
for (let i = 1; i <= n; i += 1) {
  arrSet.add(input[i]);
}

let res = [];
let cnt = 0;
for (let i = n + 1; i <= n + m; i += 1) {
  if (arrSet.has(input[i])) {
    cnt += 1;
    res.push(input[i]);
  }
}
console.log(cnt);
res.sort((a, b)=> a.localeCompare(b));
console.log(res.join('\n'));