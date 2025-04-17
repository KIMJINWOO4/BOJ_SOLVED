function solution(clothes) {
    var answer = 1;
    let map = new Map();
    for (let i = 0; i < clothes.length; i++) {
        if (map.has(clothes[i][1]))
            map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
        else
            map.set(clothes[i][1], 1);
    }
    for (let a of map.values()) {
        answer *= a + 1;
      }

    return answer - 1;
}