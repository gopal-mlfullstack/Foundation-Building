"""
LeetCode #344: Reverse String

Problem Statement:
Write a function that reverses a string. The input string is given as an array of characters `s`.
You must do this by modifying the input array in-place with O(1) extra space.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
"""

def reverseString(s):
    start, end = 0, len(s) -  1

    while start < end:
        s[start], s[end] = s[end], s[start]
        start += 1
        end -= 1

    return s 
print(reverseString(["h","e","l","l","o","i"]))
   
