// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/

function countPalindromicSubsequence(string) {
    let pal = 0
    const used = new Set()
    for (let i = 0; i < string.length; i++) {
        if (used.has(string[i])) {
            continue
        }
        used.add(string[i])
        const j = string.lastIndexOf(string[i])
        if (j > i) {
            const sub = new Set(string.substring(i + 1, j))
            pal += sub.size
        }
    }

    return pal
};