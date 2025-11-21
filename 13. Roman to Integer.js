// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let number = 0
    s.split("").forEach((el, i, arr) => {
        const curr = values[el]
        const next = values[arr[i + 1]]

        if (curr < next) number -= curr
        else number += curr

    })

    return number
};