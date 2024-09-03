function solution(s) {
    var answer = [];
    let cnt1 = 0;
    let cnt2 = 0;
    while (s != "1") {
        let a = s.split('').map(n => {
            if (n == 0){
                cnt1++;
                return "";
            }
            return ("1");
        })
        
        s = a.join('').length.toString(2);
        cnt2++;
    }
    return [cnt2, cnt1];
}