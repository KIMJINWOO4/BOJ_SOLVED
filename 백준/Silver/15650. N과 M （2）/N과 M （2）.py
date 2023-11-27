n, m = input().split()
n = int(n)
m = int(m)
arr = []
visit = [False] * (n+1)
def dfs():
    if len(arr) == m:
        if sorted(arr) == arr:
            print(' '.join(map(str,arr)))
        return
    for i in range(1,n+1):
        if visit[i]:
            continue
        visit[i] = True
        arr.append(i)
        dfs()
        arr.pop()
        visit[i] = False

dfs()