import sys
sys.setrecursionlimit(10**6)
arr = []
n, m = map(int,input().split())
for _ in range(n):
    arr.append(list(map(int,input().split())))
count = 0
def dfs(x,y):
    global count
    if x <= -1 or x >= n or y <= -1 or y >= m:
        return False
    if arr[x][y] == 1:
        count += 1
        arr[x][y] = 0
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return True
    return False

result = 0
res = []
for i in range(n):
    for j in range(m):
        boole = dfs(i,j)
        if boole == True:
            result += 1
            res.append(count)
            count = 0
print(result)
if len(res) == 0:
    print(0)
else:
    print(max(res))