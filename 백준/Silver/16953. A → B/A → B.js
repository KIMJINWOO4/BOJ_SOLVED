let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = [Number(input[0].split(' ')[0]), Number(input[0].split(' ')[1])];

let res = 1;

while (true)
  {
    if (m <= n)
      break;
    if (m % 2 === 0)
    {
      m /= 2;
      res++;
    }
    else if (m % 10 === 1)
    {
      m -= 1;
      m /= 10;
      res++;
    }
    else
      break;
  }
if (n === m)
  console.log(res)
else
  console.log(-1)
