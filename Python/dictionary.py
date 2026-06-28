"""dict1 = {1:"Tanvi", 2:"Kunal", 3:"Mangesh", 4:"Surve"}
print(dict1)
print(len(dict1))
print(type(dict1))

dict1.update({1:"Shreyash"})
print(dict1)

dict1.pop(2)
del dict1[1]
print(dict1)

print(dict1[3])
print(dict1.get(4))

dict2=dict1.copy()
print(dict2)

dict2.update({1:"Tanvi",2:"Kunal"})
print(dict2)

print(dict2.items())
for key,value in dict2.items():
    print(key,value)

print(dict2.items())
for key in dict2.keys():
    print(key)

print(dict2.items())
for value in dict2.values():
    print(value)

num = ["Tanvi","Mangesh","Tanvi","Mangesh","Tanvi","Kunal","Minal"]

freq = {}

for i in num:
    if i not in freq:
        freq[i] = 1
    else:
        freq[i] +=1

print(freq)"""

s = "I am a pretty girl"

freq = {}

for i in s:
    if i not in freq:
        freq[i] = 1
    else:
        freq[i] +=1

print(freq)