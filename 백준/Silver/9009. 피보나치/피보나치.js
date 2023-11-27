let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

pibo = []
pibo.push(0)
pibo.push(1)
while (pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length-2] + pibo[pibo.length-1]);

let tc = Number(input[0]);

for (let i = 1; i <= tc; i++)
  {
    let arr = [];
    let j = pibo.length - 1;
    let now = Number(input[i]);
    while (now > 0){
      if (now >= pibo[j]){
        now -= pibo[j];
        arr.push(pibo[j]);
      }
      j--;
    }
    let res = '';
    for (let i = arr.length - 1; i >= 0; i--) res += arr[i] + ' ';
    console.log(res);
  }