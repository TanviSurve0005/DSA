"""n=5
i=1

while i<=n:
    print(i, end=" ")
    i+=1

def num(i,n):
    #Base case
    if i>n:
        return
    #Recurssive case
    print(i, end=" ")
    num(i+1,n)
num(1,5)

def fact(n):
    if n==0:
        return 1
    return n*fact(n-1)

print(fact(4))

def fun(n):
    if n==0:
        return
    fun(n-1)
    print(n, end=" ")
fun(3)"""


def gcd(a,b):
    if b==0:
        return a

    return gcd(b,a%b)

def lcm(a,b):
    return a*b/gcd(a,b)

print(gcd(5,50))
print(lcm(15,50))