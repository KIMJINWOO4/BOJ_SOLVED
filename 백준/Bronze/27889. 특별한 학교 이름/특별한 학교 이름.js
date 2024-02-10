let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

switch (input[0]) {
  case 'NLCS':
    console.log('North London Collegiate School');
    break;
  case 'BHA':
    console.log('Branksome Hall Asia');
    break;
  case 'KIS':
    console.log('Korea International School');
    break;
  default:
    console.log('St. Johnsbury Academy');
}