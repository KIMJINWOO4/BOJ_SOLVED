function solution(k, dungeons) {
    const visitied = new Array(dungeons.length).fill(false);
    return rec(k, dungeons, 0, visitied);
}

function rec(k, dungeons, cnt, visitied) {
    let max = cnt;
    for (let i = 0; i < dungeons.length; i++) {
        if (visitied[i]) continue;
        visitied[i] = true;
        if (k >= dungeons[i][0])
            max = Math.max(max, rec(k - dungeons[i][1], dungeons, cnt + 1, visitied));
        visitied[i] = false;
    }
    return max;
}