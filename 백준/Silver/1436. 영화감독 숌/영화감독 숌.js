let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

let start = 666;
let i = 1;

while (true) {
  if (six_six_six(start)) {
    if (i === n)
      break;
    i += 1;
  }
  start += 1;
}
console.log(start);

function six_six_six(i) {
  let check = 0;
  while (i) {
    if (i % 10 === 6)
      check++;
    else
      check = 0;
    if (check === 3)
      return 1;
    i = Math.floor(i / 10);
  }
  return 0;
}