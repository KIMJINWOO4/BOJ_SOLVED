let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b, c] = input[0].split(' ').map(BigInt);

function rec(p, n) {
  if (n == BigInt(1)) return p;
  if (n % BigInt(2) == BigInt(0)) {
    let res = rec(p, n / BigInt(2));
    return (res * res) % c;
  }
  let res = rec(p, (n - BigInt(1)) / BigInt(2));
  return (res * res * p) % c;
}

let res = rec(a, b);
console.log((res % c).toString());