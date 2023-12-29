let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [v, e] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= e; i += 1)
  arr.push(input[i].split(' ').map(Number));

arr.sort((a, b) => a[2] - b[2]);
let parent = [];
for (let i = 0; i <= v; i += 1)
    parent[i] = i;

function find(parent, x) {
  if (parent[x] === x) return x;
  return parent[x] = find(parent, parent[x]);
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
}

function kruskal(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
      let [a, b, c] = arr[i];
      if (find(parent, a) !== find(parent, b)) {
          union(parent, a, b);
          res += c;
      }
  }
  return res;
}
console.log(kruskal(arr));