let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
if (n >= 620 && n <= 780) console.log('Red');
else if (n >= 590 && n < 620) console.log('Orange');
else if (n >= 570 && n < 590) console.log('Yellow');
else if (n >= 495 && n < 570) console.log('Green');
else if (n >= 450 && n < 495) console.log('Blue');
else if (n >= 425 && n < 450) console.log('Indigo');
else if (n >= 380 && n < 425) console.log('Violet');