n = 5
print("Right Tringle of star")
for i in range(1, n+1):
    print("*" * i)

print("Inverted triangle")
for i in range(n, 0, -1):
    print("*" * i)

print("Pyramid(centered)")
for i in range(1, n+1):
    print(" " * (n-i) + "*" * (2*i-1))

print("Number Triangle")
for i in range(1, n+1):
    
    for j in range(n, i+1):
        print(j, end= " ")
    print()

print("Number Triangle centered")
for i in range(1, n+1):
    print(" " * (n - i), end="")
    for j in range(1, i+1):
        print(j, end= " ")
    print()

#Dimond
print("Dimond Pattern")
for i in range(1, n+1):
    print(" " * (n-i) + "*" * (2*i-1))
for i in range(n, 0, -1):
    print(" " * (n-i) + "*" * (2*i-1))