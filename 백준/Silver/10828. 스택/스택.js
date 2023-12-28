let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];

let stack = [];
let res = '';
for (let i = 1; i <= n; i += 1) {
  let op = input[i].split(' ');
    switch (op[0]) {
        case 'push':
            stack.push(parseInt(op[1]));
          break;
        case 'top':
          res += top(stack) + '\n';
          break;
        case 'empty':
          res += empty(stack) + '\n';
          break;
        case 'size':
          res += size(stack) + '\n';
          break;
        case 'pop':
          res += pop(stack) + '\n';
          break;
    }
}

console.log(res);

function top() {
    return stack.length > 0 ? stack[stack.length - 1] : -1;
}

function empty() {
    return stack.length === 0 ? 1 : 0;
}

function size() {
    return stack.length;
}

function pop() {
    return stack.length > 0 ? stack.pop() : -1;
}