n, k = input().split()
n = int(n)
k = int(k)
c = []
sum = 0
for i in range(n):
    a = int(input())
    c.append(a)
c.sort(reverse=True)
for s in c:
    if k//s >= 0:
        sum += k//s
        k = k % s
    elif k == 0:
        break
    else:
        continue


print(sum)