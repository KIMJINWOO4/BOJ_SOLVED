function solution(routes) {
    let answer = 0;
    let min = -30001;
    routes.sort((a,b) => a[1] - b[1]);

    for(let a of routes) {
        if(a[1] >= min) {
            if(min >= a[0])
                continue;
            else {
                min = a[1];
                answer += 1;
            }
        }
    }
    return answer;
}