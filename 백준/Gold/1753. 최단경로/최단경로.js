let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

class PriorityQueue {
  constructor() {
      this.heap = [];
  }

  enqueue(priority, value) {
      const node = { priority, value };
      this.heap.push(node);
      this.bubbleUp();
  }

  bubbleUp() {
      let index = this.heap.length - 1;
      const node = this.heap[index];

      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          const parentNode = this.heap[parentIndex];

          if (node.priority >= parentNode.priority) break;

          this.heap[parentIndex] = node;
          this.heap[index] = parentNode;
          index = parentIndex;
      }
  }

  dequeue() {
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = end;
          this.sinkDown();
      }
      return min;
  }

  sinkDown() {
      let index = 0;
      const length = this.heap.length;
      const node = this.heap[0];

      while (true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let swap = null;
          let leftChild, rightChild;

          if (leftChildIndex < length) {
              leftChild = this.heap[leftChildIndex];
              if (leftChild.priority < node.priority) {
                  swap = leftChildIndex;
              }
          }

          if (rightChildIndex < length) {
              rightChild = this.heap[rightChildIndex];
              if (
                  (swap === null && rightChild.priority < node.priority) ||
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                  swap = rightChildIndex;
              }
          }

          if (swap === null) break;

          this.heap[index] = this.heap[swap];
          this.heap[swap] = node;
          index = swap;
      }
  }

  isEmpty() {
      return this.heap.length === 0;
  }
}

function dijkstra(graph, start) {
    const distances = Array(graph.length).fill(Infinity);
    distances[start] = 0;

    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(0, start);

    while (!priorityQueue.isEmpty()) {
        let { value: u, priority } = priorityQueue.dequeue();
        if (distances[u] < priority) continue;
        for (const [v, weight] of graph[u]) {
            let alt = distances[u] + weight;
            if (alt < distances[v]) {
                distances[v] = alt;
                priorityQueue.enqueue(alt, v);
            }
        }
    }
    return distances;
}

let [V, E] = input[0].split(' ').map(Number);
let K = Number(input[1]);
let edges = [];
for (let i = 2; i <= E + 1; i += 1)
  edges.push(input[i].split(' ').map(Number));
let graph = Array.from({ length: V + 1 }, () => []);

for (let [u, v, w] of edges)
    graph[u].push([v, w]);

let distances = dijkstra(graph, K);

for (let i = 1; i <= V; i++)
    console.log(distances[i] === Infinity ? 'INF' : distances[i]);