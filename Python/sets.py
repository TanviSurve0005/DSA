set1 = {"Tanvi", 2,5,8,8,5,"Surve"}
print(set1)

set1.add("Mangesh")
print(set1)

set2 = {"Kunal", 2,5,8,"Surve"}
print(set2)

#set difference
print(set1-set2)
print(set1.difference(set2))

#set Union
print(set1 | set2)

#set Intersection
print(set1&set2)

#set symmetric difference
print(set1.symmetric_difference(set2))