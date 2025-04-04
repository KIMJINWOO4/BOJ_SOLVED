function solution(diffs, times, limit) {
    let [left, right] = [1, diffs.reduce((a, b) => Math.max(a, b), 1)]
    let answer = right;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let result = totalTime(mid, times, diffs, limit);
        if (result <= limit) {
            answer = mid;
            right = mid - 1;
        }
        else left = mid + 1;
    }
    
    return answer;
}

function totalTime(level, times, diffs, limit) {
    let total = times[0];
    for (let i = 1; i < diffs.length; i++){
        if (diffs[i] <= level) total += times[i];
        else total += (diffs[i] - level) * (times[i] + times[i - 1]) + times[i];
        if (total > limit) return total;
    }
    return total;
}

