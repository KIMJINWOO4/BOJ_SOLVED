function solution(sizes) {
    var answer = 0;
    sizes.sort((a, b) => {
        let a1 = Math.max(a[0], a[1]);
        let a2 = Math.min(a[0], a[1]);
        let b1 = Math.max(b[0], b[1]);
        let b2 = Math.min(b[0], b[1]);
        a[0] = a1;
        a[1] = a2;
        b[0] = b1;
        b[1] = b2;
        if (a[0] > b[0]) return -1;
        else if (a[0] == b[0] && a[0] > b[0]) return 1;
        return 0;
    });
    let max = -1;
    for (let i = 0; i < sizes.length; i++) {
        max = Math.max(max, sizes[i][1]);
    }
    return max * sizes[0][0];
}