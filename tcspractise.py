from itertools import count


def is_prime(num):
    if num<2:
        return False
    for i in range(2, int(num**0.5)+1):
        if num%i==0:
            return False
        return True

def digit_sum(num):
    while num>=10:
        num = sum(int(d)for d in str(num))
    return num

m,n = map(int, input().split())

count = 0
num=1

while count<m:
    num+=1
    if is_prime(num):
        count=+1

single_digit =digit_sum(num)
print(num * single_digit)
