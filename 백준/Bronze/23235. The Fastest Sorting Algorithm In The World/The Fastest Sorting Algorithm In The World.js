let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let res = '';
let i = 0;
while (Number(input[i].split(' ')[0]) != 0)
{
    res += `Case ${i + 1}: Sorting... done!\n`;
    i++;
}
  
console.log(res);