let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
console.log(n + m);
console.log(n - m);
console.log(n * m);
console.log(parseInt(n / m));
console.log(n % m);