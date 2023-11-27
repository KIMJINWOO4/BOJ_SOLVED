n = input().split('-')
su = []
for i in n:
    plus = 0
    a = i.split('+')
    for j in a:
        plus += int(j)
    su.append(plus)
sum = su[0]
for i in range(1,len(su)):
    sum -= su[i]
print(sum)