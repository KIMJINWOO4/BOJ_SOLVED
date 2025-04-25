class MinHeap {
  constructor() { this.h = [null]; }
  size() { return this.h.length - 1; }
  peek() { return this.h[1]; }
  push(x) {
    this.h.push(x);
    let i = this.h.length - 1;
    while (i > 1 && this.h[i] < this.h[Math.floor(i/2)]) {
      [this.h[i], this.h[Math.floor(i/2)]] =
        [this.h[Math.floor(i/2)], this.h[i]];
      i = Math.floor(i/2);
    }
  }
  pop() {
    if (this.h.length <= 1) return null;
    if (this.h.length === 2) return this.h.pop();
    const ret = this.h[1];
    this.h[1] = this.h.pop();
    let i = 1;
    while (true) {
      let left = 2*i, right = 2*i+1, smallest = i;
      if (left < this.h.length && this.h[left] < this.h[smallest])
        smallest = left;
      if (right < this.h.length && this.h[right] < this.h[smallest])
        smallest = right;
      if (smallest === i) break;
      [this.h[i], this.h[smallest]] = [this.h[smallest], this.h[i]];
      i = smallest;
    }
    return ret;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  scoville.forEach(x => heap.push(x));
  let cnt = 0;
  
  while (heap.size() > 1 && heap.peek() < K) {
    const a = heap.pop();
    const b = heap.pop();
    heap.push(a + b * 2);
    cnt++;
  }
  return heap.peek() >= K ? cnt : -1;
}
