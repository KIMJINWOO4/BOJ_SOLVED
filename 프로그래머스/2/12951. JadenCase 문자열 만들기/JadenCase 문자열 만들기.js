function solution(s) {
    let n = s.split(' ');
    let answer = n.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    
    return answer.join(' ');
}