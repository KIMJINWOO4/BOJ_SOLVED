n = int(input())
m = input().split()
k = []
sum = 0
for i in range(n):
    k.append(int(m[i]))

k.sort()

for i in range(n):
    if i == 0:
        sum += k[i]
    else:
        sum += k[i-1]+k[i]
        k[i] = k[i-1]+k[i]
print(sum)