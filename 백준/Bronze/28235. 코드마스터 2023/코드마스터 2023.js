let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

switch (input[0]) {
  case 'SONGDO':
    console.log('HIGHSCHOOL');
    break;
  case 'CODE':
    console.log('MASTER');
    break;
  case '2023':
    console.log('0611');
    break;
  default:
    console.log('CONTEST');
}