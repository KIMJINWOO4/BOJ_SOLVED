let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);

if (n > m) console.log('>');
else if (n < m) console.log('<');
else console.log('==');