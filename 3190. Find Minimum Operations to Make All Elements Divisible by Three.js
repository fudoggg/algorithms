// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/

function minimumOperations(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3) res++;

    }

    return res
};
