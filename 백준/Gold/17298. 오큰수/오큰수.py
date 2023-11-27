import sys

a = int(input())
su= list(map(int,sys.stdin.readline().split()))
final = [-1] * a

stack = []
stack.append(0)
for i in range(1,a):
    while stack and su[stack[-1]] < su[i]:
        final[stack.pop()] = su[i]
    stack.append(i)
print(*final)