function solution(maps) {
    const visitied = Array.from(Array(maps.length), () => new Array(maps[0].length).fill(false));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const queue = [[0,0,1]];
    visitied[0][0] = true;
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (x == maps.length - 1 && y == maps[0].length - 1) return dist;
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length &&
                maps[nx][ny] && !visitied[nx][ny]) {
                visitied[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1;
}