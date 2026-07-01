import re


c = 0.3
a = 0.1 + 0.2
print(c == a)

x =[1,2]
x.append([3,4])
print(x)
x.extend([3,4])
print(x)

#Remove Duplicate from list
lst = [1,2,1,2,4,5,3]
seen = set()
result = [x for x in lst if not (x in seen or seen.add(x))]
print(result)

s = "Hello, World!"
print(s[::-1])

#palindrome
def is_palindrome(s):
    s = s.lower().replace(" ", " ")
    return s == s[::-1]
print(is_palindrome("racecar"))

#Count Occurrences of a Character in a String
s = "Hello, World!"
freq = {}
for ch in s:
    freq[ch] = freq.get(ch, 0) + 1
print(freq)

name = "Tanvi"
age = 21
# f-string (modern, preferred)
print(f"My name is {name} and I am {age} years old.")
# .format()
print("My name is {} and I am {} years old.".format(name, age))