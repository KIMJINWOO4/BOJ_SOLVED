function solution(numbers) {
    var answer = '';
    numbers.sort((a, b) => {
        const ab = '' + a + b;
        const ba = '' + b + a;
        if (ab > ba) return -1;
        if (ab < ba) return  1;
        return  0;
    });
    answer = numbers.join('');
    return answer[0] === '0' ? '0' : answer;
}
