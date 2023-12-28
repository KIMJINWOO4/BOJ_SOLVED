let fs5 = require('fs');
let input5 = fs5.readFileSync('/dev/stdin').toString().split('\n');

let n5 = Number(input5[0]);
let arr2 = input5[1].split(' ').map(Number);
let max3 = arr2.reduce((a, b) => Math.max(a, b));
let sum = 0;
for (let i = 0; i< n5; i++)
{
    sum += (arr2[i]/max3 * 100);
}
console.log(`${(sum / n5)}`)