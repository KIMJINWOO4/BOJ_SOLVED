n = int(input())
arr = []
rank = [1] * n
for _ in range(n):
    arr.append(list(map(int,input().split())))
for i in range(n):
    for j in range(n):
        if arr[i][0] < arr[j][0]:
            if arr[i][1] < arr[j][1]:
                rank[i] += 1
for i in rank:
    print(i,end=" ")