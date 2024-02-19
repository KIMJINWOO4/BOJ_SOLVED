const fs = require("fs");

// 표준 입력에서 데이터를 읽어옵니다.
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// "gum gum for jay jay"가 몇 번 등장하는지를 세는 변수를 초기화합니다.
let count = 0;

// 각 줄을 순회하면서 "gum gum for jay jay"가 등장하는지 확인합니다.
for (let i = 0; i < input.length; i++) {
    if (input[i].trim() === "gum gum for jay jay") {
        count++;
    }
}

// 결과를 출력합니다.
console.log(count);
