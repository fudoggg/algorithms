// https://leetcode.com/problems/memoize/description/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const mem = new Map();

    return function (...args) {
        const key = args.join('-')
        if (mem.has(key)) { return mem.get(key) }
        else {
            const res = fn(...args);
            mem.set(key, res);
            return res
        }
    }
}