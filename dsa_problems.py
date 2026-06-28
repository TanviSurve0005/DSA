# Palindrom check
def is_palindrom(s):
    s = s.lower().replace("", "")
    return s == s[::-1]

print(is_palindrom("noon"))
print(is_palindrom("noo"))

#FizzBuzz
for i in range(1,21):
    if i % 5==0 and i%3==0: print("FizzBuzz")
    elif i%3==0: print("Fizz")
    elif i%5==0: print("Buzz")
    else:print(i)

#Find largest Second Largest
def second_largest(nums):
    first = second = float('-inf')
    for n in nums:
        if n > first:
            second = first
            first = n
        elif first > n >second:
            second = n
    return second

print(second_largest([1,3,4,4,5,5,6,67,8]))

#check prime
def is_prime(n):
    if n<2:
        return False
    for i in range(2, int(n**0.5) +1):
        if n%i==0:
            return False
    return True

print(is_prime(3))

#Reverse Number
def reverse_number(n):
    rev = 0
    while n>0:
        rev = rev*10 + n%10
        n//=10
    return rev

print(reverse_number(134646))

#Find Duplicates in a list
def find_duplicates(lst):
    seen = set()
    dupes = set()
    for i in lst:
        if i in seen:
            dupes.add(i)
        seen.add(i)
    return list(dupes)

print(find_duplicates([1,3,4,5,6,2,2,1,4,6,3]))

#count vowels in string
def count_vowels(s):
    return sum(1 for ch in s.lower() if ch in "aeiou")

print(count_vowels("fgyudjhdhcfxdtseyaaaaa"))

#Word frequency Counter
def word_freq(sentence):
    words = sentence.lower().split()
    freq = {}
    for w in words:
        freq[w] = freq.get(w,0) +1
    return freq