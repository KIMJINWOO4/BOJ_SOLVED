let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

if (input[0].length === 1) console.log('0.0');
else if (input[0][1] === '+') {
  if (input[0][0] === 'A') console.log('4.3');
  else if (input[0][0] === 'B') console.log('3.3');
  else if (input[0][0] === 'C') console.log('2.3');
  else if (input[0][0] === 'D') console.log('1.3');
}
else if (input[0][1] === '0') {
  if (input[0][0] === 'A') console.log('4.0');
  else if (input[0][0] === 'B') console.log('3.0');
  else if (input[0][0] === 'C') console.log('2.0');
  else if (input[0][0] === 'D') console.log('1.0');
}
else if (input[0][1] === '-') {
  if (input[0][0] === 'A') console.log('3.7');
  else if (input[0][0] === 'B') console.log('2.7');
  else if (input[0][0] === 'C') console.log('1.7');
  else if (input[0][0] === 'D') console.log('0.7');
}