function solution(genres, plays) {
    const answer = [];
    const arr = [];
    let jenreMap = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        if (jenreMap.has(genres[i]))
            jenreMap.set(genres[i], [...jenreMap.get(genres[i]), {"num": i, "plays": plays[i]}])
        else
            jenreMap.set(genres[i], [{"num": i, "plays": plays[i]}]);
    }
    
    for (let jenre of jenreMap) {
        const jenreSort = jenre[1].sort((a, b) => b["plays"] - a["plays"]);
        const jenreObj = 
            {
                "jenre": jenre[0],
                "plays": jenreSort.reduce((sum, song) => sum + song.plays, 0),
                "top": jenreSort.slice(0, 2).map(song => song.num),
            }
        arr.push(jenreObj);
    }
    arr.sort((a, b) => b["plays"] - a["plays"]);
    for (let i = 0; i < arr.length; i++)
        answer.push(...arr[i]["top"]);
    return answer;
}