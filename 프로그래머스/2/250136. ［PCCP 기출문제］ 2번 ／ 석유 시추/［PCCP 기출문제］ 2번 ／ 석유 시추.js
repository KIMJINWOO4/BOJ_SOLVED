function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const oilSizes = Array.from({ length: n }, () => Array(m).fill(0));
    let maxOil = 0;

    const bfs = (x, y, id) => {
        let queue = [[x, y]];
        visited[x][y] = true;
        let size = 0;

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            size++;
            oilSizes[cx][cy] = id;

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;

                if (nx >= 0 && nx < n && ny >= 0 && ny < m && land[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return size;
    }

    let id = 1;
    const oilSizeMap = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                const size = bfs(i, j, id);
                oilSizeMap[id] = size;
                id++;
            }
        }
    }

    for (let j = 0; j < m; j++) {
        const seen = new Set();
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const currentId = oilSizes[i][j];
            if (currentId > 0 && !seen.has(currentId)) {
                sum += oilSizeMap[currentId];
                seen.add(currentId);
            }
        }
        maxOil = Math.max(maxOil, sum);
    }

    return maxOil;
}
