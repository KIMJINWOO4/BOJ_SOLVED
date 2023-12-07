let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

if (input[0].includes('N')||input[0].includes('n'))
  console.log('Naver D2');
else
  console.log('Naver Whale');