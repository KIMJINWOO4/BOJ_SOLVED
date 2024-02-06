let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

switch (Number(input[0])) {
  case 1:
    console.log('Leading the Way to the Future');
    break;
  default:
    console.log('YONSEI')
}