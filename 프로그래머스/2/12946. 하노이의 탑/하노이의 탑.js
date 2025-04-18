function solution(n) {
    const answer = [];
    hanoi(n, 1, 2, 3);
    function hanoi(n, from, by, to) {
        if (n == 1) return answer.push([from, to]);
        else {
            hanoi(n - 1, from, to, by);
            answer.push([from, to]);
            hanoi(n - 1, by, from, to);
        }
    }
    return answer;
}

