let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

switch(Number(input[0])) {
  case 1:
    console.log('12 1600');
    break;
    case 2:
    console.log('11 894');
    break;
    case 3:
    console.log('11 1327');
    break;
    case 4:
    console.log('10 1311');
    break;
    case 5:
    console.log('9 1004');
    break;
    case 6:
    console.log('9 1178');
    break;
    case 7:
    console.log('9 1357');
    break;
    case 8:
    console.log('8 837');
    break;
    case 9:
    console.log('7 1055');
    break;
    case 10:
    console.log('6 556');
    break;
  default:
    console.log('6 773');
}