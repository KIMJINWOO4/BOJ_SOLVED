let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let map = new Map();
let reverseMap = new Map(); // New map for reverse lookup

for (let i = 1; i <= n; i += 1) {
  let value = input[i];
  map.set(i, value);
  reverseMap.set(value, i); // Create reverse mapping
}

for (let i = n + 1; i <= n + m; i += 1) {
  if (Number.isInteger(Number(input[i]))) {
    let key = Number(input[i]);
    if (map.has(key)) {
      console.log(map.get(key));
    }
  } else {
    let value = input[i];
    if (reverseMap.has(value)) {
      console.log(reverseMap.get(value));
    }
  }
}
