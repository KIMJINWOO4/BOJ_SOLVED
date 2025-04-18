function solution(arr)
{
    const answer = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
        let prev = answer.pop();
        if (arr[i] == prev) answer.push(prev);
        else {
            answer.push(prev);
            answer.push(arr[i]);
        }
    }
    return answer;
}