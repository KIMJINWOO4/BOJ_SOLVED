function solution(progresses, speeds) {
    const map = [];
    const answer = [];
    let cur = 0;
    for (let i = 0; i < progresses.length; i++)
        map.push(success(progresses[i], speeds[i]));
    while (map.length > cur) {
        const maxDay = map[cur];
        let cnt = 1;
        while (cur + 1 < map.length && maxDay >= map[cur + 1]) {
            cur++;
            cnt++;
        }
        answer.push(cnt);
        cur++;
    }
    return answer;
}

function success(progress, speed) {
    let day = 1;
    while (true) {
        const cur = progress + (speed * day);
        if (cur >= 100) return day;
        day++;
    }
}