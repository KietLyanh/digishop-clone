from itertools import permutations

s = input()
i = 0
while i < 10:
    per = permutations(s)
    for j in per:
        print("0",end='')
        print(*j,sep='')
    s = per
    i+=1

