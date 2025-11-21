// https://leetcode.com/problems/integer-to-roman/solutions/

const ROMAN = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
}

const ROMA_ARR = Array.from(Object.keys(ROMAN)).reverse() //['1000',500','100','50','10','5','1']

function intToRoman(num) {
    const numArr = []
    while (num > 0) {
        numArr.push(num % 10)
        num = Math.floor(num / 10)
    }
    numArr.reverse()

    const romaNum = []

    numArr.forEach((num, i, arr) => {
        const tens = arr.length - 1 - i

        switch (true) {
            case num === 9:
                romaNum[i] = ROMAN[10 ** tens]
                romaNum[i] += ROMAN[10 ** (tens + 1)]
                break

            case num >= 5:
                romaNum[i] = ROMAN[5 * 10 ** tens]
                num -= 5
                while (num > 0) {
                    romaNum[i] += ROMAN[10 ** tens]
                    num--
                }
                break

            case num === 4:
                romaNum[i] = ROMAN[10 ** tens]
                romaNum[i] += ROMAN[5 * 10 ** tens]
                break

            case num > 0:
                romaNum[i] = ROMAN[10 ** tens]
                num--
                while (num > 0) {
                    romaNum[i] += ROMAN[10 ** tens]
                    num--
                }
                break

            default:
                romaNum[i] = ""
                break
        }
    })
    return romaNum.join("")
};