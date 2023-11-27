let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let got = input[1].split(' ').map(Number)
let guess = input[3].split(' ').map(Number)

got.sort((a, b) => a - b)

const upperBound = (arr, target) => {
  let le = 0,
    ri = arr.length;
  while (le < ri) {
    const mid = Math.floor((le + ri) / 2);
    if (target < arr[mid]) {
      ri = mid;
    } else {
      le = mid + 1;
    }
  }
  return ri;
};

// target 보다 작거나 같은 가장 왼쪽 인덱스 찾기
const lowerBound = (arr, target) => {
  let le = 0,
    ri = arr.length;
  while (le < ri) {
    const mid = Math.floor((le + ri) / 2);
    if (target <= arr[mid]) {
      ri = mid;
    } else {
      le = mid + 1;
    }
  }
  return ri;
};
let res = []
for (let i = 0; i < guess.length; i++)
  res.push(upperBound(got, guess[i]) - lowerBound(got, guess[i])) 
console.log(res.join(' '))
