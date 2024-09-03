function solution(s){
    var answer = true;
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] == '(')
            left += 1;
        else
            right += 1;
        if (right > left)
            return false;
    }
    if (left == right)
        return true;
    return false;
}