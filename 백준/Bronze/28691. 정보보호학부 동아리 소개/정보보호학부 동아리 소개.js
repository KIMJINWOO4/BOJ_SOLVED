let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

switch (input[0]) {
  case 'M':
    console.log('MatKor');
    break;
  case 'W':
    console.log('WiCys');
    break;
  case 'C':
    console.log('CyKor');
    break;
  case 'A':
    console.log('AlKor');
    break;
  default:
    console.log('$clear');
}