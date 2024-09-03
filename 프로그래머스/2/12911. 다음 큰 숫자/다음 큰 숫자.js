function solution(n) {
    var answer = 0;
    let res2 = 0;
    let res = n.toString(2).split('').filter(n => {
        if (n == 1)
            return 1;
    })
    do {
        n++;
        res2 = n.toString(2).split('').filter(n => {
        if (n == 1)
            return 1;
    })}
    while(res.length != res2.length);
    
    return n;
}