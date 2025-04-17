function solution(babbling) {
    const dict = ['aya', 'ye', 'woo', 'ma', 'ayaye'];
    let answer = 0;
    babbling.forEach((item) => {
        while (true) {
            if (item.startsWith(dict[0]))
                item = item.slice(3);
            else if (item.startsWith(dict[1]))
                item = item.slice(2);
            else if (item.startsWith(dict[2]))
                item = item.slice(3);
            else if (item.startsWith(dict[3]))
                item = item.slice(2);
            else if (item.startsWith(dict[4]))
                item = item.slice(5);
            else break;
            if (item === '') {
                answer++;
                break;
            }
        }
    })
    return answer;
}