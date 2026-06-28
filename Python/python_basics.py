monday = 50
Tuesday = 50

Avg = (monday + Tuesday)/2
print(int(Avg))
print(type(Avg))

First_Name = str(input("Enter your first name: "))
Last_Name = str(input("Enter your last name: "))
print(First_Name,Last_Name, sep="\n")
print("My last Name is:",Last_Name)

age = int(input("Enter You Age:"))

if age >=18:
    print("You are eligible for driving a car")
else:
    print("You are not eligible to driving a car")

age = int(input("Enter you age:"))

result = "Eligible" if age>=18 else "Not eligible"
print(result)

i = 0

while i<=5:
    print(i, end=" ")
    i+=1

list1 = [3,3,35,5,1,1]
for i in list1:
    print(i, end=" ")

for i in range(1,11):
    print(i, end=" ")

for i in range(1,11,2):
    print(i,"\n")

for i in range(20,0,-1):
    print(i, end=" ")

def add(a,b):
    sum = a+b
    return sum
ans = add(20,30)
print(ans)