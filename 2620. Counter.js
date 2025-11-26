// https://leetcode.com/problems/counter/description/

/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
    let calls = 0
    return function () {
        return n + calls++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */