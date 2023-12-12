let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
if (n % 4 == 0 && n % 100 != 0 || n % 400 == 0)
  console.log(1);
else 
  console.log(0);