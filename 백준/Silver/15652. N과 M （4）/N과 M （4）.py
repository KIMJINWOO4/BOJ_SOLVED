n, m = input().split()
n = int(n)
m = int(m)
arr = []

def dfs(num):
    if len(arr) == m:
        print(' '.join(map(str,arr)))
        return
    for i in range(1,n+1):
        if num > i:
            continue
        arr.append(i)
        dfs(i)
        arr.pop()

dfs(0)