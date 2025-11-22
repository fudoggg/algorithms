// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const s = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (s === nums[j]) return [i, j]
        }
    }
};