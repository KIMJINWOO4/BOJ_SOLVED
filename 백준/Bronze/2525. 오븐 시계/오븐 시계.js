let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

if (c / 60 > 0) {
  a += Math.floor(c / 60);
  b += c % 60;
}

else {
  b += c;
}

if (b >= 60) {
  a += Math.floor(b / 60);
  b = b % 60;
}

if (a >= 24) {
  a = a % 24;
}

console.log(a + ' '+ b);