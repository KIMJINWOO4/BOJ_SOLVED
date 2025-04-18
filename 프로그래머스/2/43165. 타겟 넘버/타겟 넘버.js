function solution(numbers, target) {
    var answer = 0;
    let sum = 0;
    const maxNum = numbers.length;
    dfs(0, 0);
    function dfs(i, sum) {
        if (i == maxNum && sum == target) return ++answer;
        else if (i == maxNum) return ;
        else {
            dfs(i + 1, sum + numbers[i]);
            dfs(i + 1, sum - numbers[i]);
        }
    }
    return answer;
}

