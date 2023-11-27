from collections import deque
import sys
input = sys.stdin.readline
a = int(input())
queue = deque([])
for _ in range(a):
    b = input().split()
    if b[0] == "push":
        queue.append(int(b[1]))
    elif b[0] == "pop":
        if len(queue) == 0:
            print(-1)
        else:
            print(queue.popleft())
    elif b[0] == "size":
        print(len(queue))
    elif b[0] == "empty":
        if len(queue) == 0:
            print(1)
        else:
            print(0)
    elif b[0] == "front":
        if len(queue) == 0:
            print(-1)
        else:
            print(queue[0])
    elif b[0] == "back":
        if len(queue) == 0:
            print(-1)
        else:
            print(queue[-1])
