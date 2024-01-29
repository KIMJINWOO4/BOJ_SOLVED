let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log('SHIP NAME      CLASS          DEPLOYMENT IN SERVICE');
console.log('N2 Bomber      Heavy Fighter  Limited    21        ');
console.log('J-Type 327     Light Combat   Unlimited  1         ');
console.log('NX Cruiser     Medium Fighter Limited    18        ');
console.log('N1 Starfighter Medium Fighter Unlimited  25        ');
console.log('Royal Cruiser  Light Combat   Limited    4         ');