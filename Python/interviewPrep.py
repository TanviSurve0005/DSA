#Stings Operations
from enum import nonmember

s = "Hello World"

print(s[::-1])
print(" ".join(s.split()[::-1]))
print(s.lower())
print(s.upper())
print(s.replace("H", "h"))
s.count("o")

#List Operations

lst = [2,4,5,4,3,6,7,3]
print(sorted(lst))
print(max(lst))
print(min(lst))
print(sum(lst))
print([x for x in lst if x>=3])

#OOP concepts

class employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def Give_raise(self, amount):
        self.salary += amount
        return self.salary


class manager(employee):
    def __init__(self, name, salary, team_size):
        super().__init__(name, salary)
        self.team_size = team_size

emp1 = employee("Tanvi", 50000)
emp1.Give_raise(5000)
print(emp1.name)
print(emp1.salary)
mgr = manager("Rahul", 80000, 10)
print(mgr.name)
print(mgr.salary)
print(mgr.team_size)
mgr.Give_raise(5000)
print(mgr.salary)

a = [1,2,3]
b = [1,2,3]
print(a is b)
print(a==b)

a = [1,2,3]
c = a
print(a is c)
print(a==c)

def add_item(item, lst=None):
    if lst is None:
        lst=[]
    lst.append(item)
    return lst

print(add_item(1))
print(add_item(2))





