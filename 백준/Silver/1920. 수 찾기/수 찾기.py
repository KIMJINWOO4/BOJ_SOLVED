n = int(input())
get = list(map(int,input().split()))
m = int(input())
find = list(map(int,input().split()))
get.sort()

def binary(arr,target,start,end):
    while start <= end:
        mid = (start+end) //2
        if arr[mid] == target:
            return 1
        elif arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return 0

for i in range(m):
    print(binary(get,find[i],0,n-1))