// https://leetcode.com/problems/binary-prefix-divisible-by-5/description/

/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
function prefixesDivBy5(nums) {
    const res = [];
    let value = 0;

    for (let i = 0; i < nums.length; i++) {
        value = ((value << 1) + nums[i]) % 5;
        res[i] = value === 0;
    }

    return res
};
