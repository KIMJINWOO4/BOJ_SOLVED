function solution(triangle) {
    for(let i = triangle.length - 2; i >= 0; i -= 1){
        for(let j = 0; j < triangle[i].length; j += 1)
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
    return triangle[0][0];
}