let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])

let i = 1
let j
for (let tc = 0; tc < n; tc++)
  {
    j = Number(input[i]) 
    let arr = [];
    for (let k = i + 1; k <= i + j; k++)
      {
        let cases = input[k].split(' ').map(Number)
        arr.push(cases)
      }
    i += j + 1;
    arr.sort((a, b)=>a[0]-b[0])
    let cnt = 0;
    let minValue = 100001;
    for(let [x, y] of arr)
      {
        if (y < minValue){
          minValue = y;
          cnt++;
        }
      }
    console.log(cnt);
  }