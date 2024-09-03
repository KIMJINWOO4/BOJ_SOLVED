function solution(s) {
    let m = s.split(' ').map(Number);
    let min = m.reduce((a, b) => {
        return Math.min(a, b);
    });
    let max = m.reduce((a, b) => {
        return Math.max(a, b);
    });
    let answer = `${min} ${max}`;
    return answer;
}