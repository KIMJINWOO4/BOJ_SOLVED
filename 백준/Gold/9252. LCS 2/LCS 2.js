let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0];
let arr2 = input[1];

let res = 0;
let LCS = new Array(arr.length + 1);
let strArr = [];
for (let i = 0; i <= arr.length; i++) {
  LCS[i] = new Array(arr2.length + 1).fill(0);
}

for (let i = 1; i <= arr.length; i += 1) {
  for (let j = 1; j <= arr2.length; j += 1) {
    if (arr[i - 1] == arr2[j - 1]) 
    {
      LCS[i][j] = LCS[i - 1][j - 1] + 1;
      strArr.push(arr[i-1]);
    }
    else
      LCS[i][j] = Math.max(LCS[i][j - 1], LCS[i - 1][j]);
  }
}

console.log(LCS[arr.length][arr2.length]);

let i = arr.length;
let j = arr2.length;
let LCSString = [];

while (i > 0 && j > 0) {
  if (arr[i - 1] == arr2[j - 1]) {
    LCSString.unshift(arr[i - 1]);
    i--;
    j--;
  } else if (LCS[i - 1][j] > LCS[i][j - 1]) {
    i--;
  } else {
    j--;
  }
}

console.log(LCSString.join(''));