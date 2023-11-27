let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]);

function check(x)
{
  return x == x.split('').reverse().join('');
}
for (let i = 1; i <= n; i++)
  {
    let arr = input[i];
    
    if (check(arr)) console.log(0);
    else{
      let found = false;
      let lidx = arr.length;
      for (let fidx = 0; fidx < parseInt(lidx / 2); fidx++)
      {
        if (arr[fidx] != arr[lidx - fidx - 1]) {
          if (check(arr.slice(0, fidx) + arr.slice(fidx+1, lidx))) 
            found = true;
          if (check(arr.slice(0, lidx - fidx - 1) + arr.slice(lidx - fidx, lidx))) 
            found = true;
          break;
        }
      }
      if (found) console.log(1);
      else console.log(2);
    }
  }