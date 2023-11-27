let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let res = 0;

while (true)
  {
    if (n % 5 === 0 || n < 0)
      break;
    n -= 3;
    res++;
  }
if (n === 0)
  console.log(res)
else if ( n < 0)
  console.log(-1)
else
{
  res += parseInt(n / 5)
  console.log(res)
}

