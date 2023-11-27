let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i += 1) {
  arr.push(input[i].split(''));
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(graph, visited, x, y, color) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (0 <= nx && nx < graph.length && 0 <= ny && ny < graph[0].length && !visited[nx][ny] && graph[nx][ny] === color) {
            dfs(graph, visited, nx, ny, color);
        }
    }
}

function dfs2(graph, visited, x, y, color) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (0 <= nx && nx < graph.length && 0 <= ny && ny < graph[0].length && !visited[nx][ny]) {
            if (color === 'R' || color === 'G') {
                if (graph[nx][ny] === 'R' || graph[nx][ny] === 'G') {
                    dfs2(graph, visited, nx, ny, color);
                }
            } else {
                if (graph[nx][ny] === color) {
                    dfs2(graph, visited, nx, ny, color);
                }
            }
        }
    }
}

function count_area(graph, func) {
    let n = graph.length;
    let visited = Array.from(Array(n), () => Array(n).fill(false));
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < graph[0].length; j++) {
            if (!visited[i][j]) {
                func(graph, visited, i, j, graph[i][j]);
                count += 1;
            }
        }
    }

    return count;
}

let res1 = count_area(arr, dfs);
let res2 = count_area(arr, dfs2);

console.log(res1, res2);