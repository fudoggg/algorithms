// https://leetcode.com/problems/greatest-sum-divisible-by-three/description

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSumDivThree(nums) {
    let sum = 0;
    const mins = [[0, 0], [0, 0]]

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (nums[i] % 3 === 1) {
            if (!mins[0][0] || mins[0][0] >= nums[i]) {
                mins[0][1] = mins[0][0]
                mins[0][0] = nums[i];
            } else if (!mins[0][1] || mins[0][1] >= nums[i]) {
                mins[0][1] = nums[i];
            }
        }

        if (nums[i] % 3 === 2) {
            if (!mins[1][0] || mins[1][0] >= nums[i]) {
                mins[1][1] = mins[1][0]
                mins[1][0] = nums[i];
            } else if (!mins[1][1] || mins[1][1] >= nums[i]) {
                mins[1][1] = nums[i];
            }
        }
    }

    if (sum % 3) {
        let sumMod = sum;
        let sumAnotherMod = sum;
        sumMod -= mins[sum % 3 - 1][0];
        if (sumMod % 3) sumMod = 0

        if (sum % 3 === 1) {
            sumAnotherMod = sumAnotherMod - mins[1][0] - mins[1][1];
        } else {
            sumAnotherMod = sumAnotherMod - mins[0][0] - mins[0][1];
        }
        if (sumAnotherMod % 3) sumAnotherMod = 0

        return sumMod > sumAnotherMod ? sumMod : sumAnotherMod;
    }

    return sum
};
