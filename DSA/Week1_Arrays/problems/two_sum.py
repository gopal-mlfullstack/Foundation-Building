"""
LeetCode #1: Two Sum

Problem Statement:
Given an array of integers `nums` and an integer `target`, return indices of the two numbers
such that they add up to `target`. You may assume that each input has exactly one solution,
and you may not use the same element twice. You can return the answer in any order.

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.

Examples:
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Explanation: Because nums[1] + nums[2] = 2 + 4 = 6, return [1, 2].

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
Explanation: Because nums[0] + nums[1] = 3 + 3 = 6, return [0, 1].

Follow-up: Can you come up with an algorithm that is less than O(n²) time complexity?
"""

def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, n in enumerate(nums):
        diff = target - n
        if diff in seen:
            return [seen[diff], i]
        seen[n] = i 
    return -1 

print(two_sum([2,7,11,15], 9))