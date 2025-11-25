// https://leetcode.com/problems/smallest-integer-divisible-by-k/description

/**
 * @param {number} k
 * @return {number}
 */
function smallestRepunitDivByK(k) {
    if (k % 2 === 0) return -1;

    let mod = 0;
    for (let len = 1; len <= k; len++) {
        mod = (mod * 10 + 1) % k;
        if (mod === 0) return len;
    }
    return -1
};
