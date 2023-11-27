n = int(input())
m = []
for _ in range(n):
    m.append(int(input()))
m.sort()
for i in range(n):
    print(m[i])