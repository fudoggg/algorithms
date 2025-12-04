import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = await fs.readFile(`${__dirname}/data.txt`, 'utf8')
const arr = data.split('\n').map(line => line.split(''));

export async function day4first() {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '@') {
                let sum = 0
                for (let k = Math.max(i - 1, 0); k < Math.min(i + 2, arr.length); k++) {
                    for (let l = Math.max(j - 1, 0); l < Math.min(j + 2, arr[i].length); l++) {
                        if (i === k && j === l) continue;

                        if (arr[k][l] === '@') {
                            sum++
                        }
                    }
                }

                if (sum < 4) {
                    result++
                }
            }
        }
    }

    return result;
}
// 1626 +

export async function day4second() {
    let result = 0

    let startX = 0, startY = 0
    let endX = arr.length - 1, endY = arr[startX].length - 1

    let released = [[startX, startY, endX, endY]]

    while (released.length !== 0) {
        const releasedNew = []

        for (let iter = 0; iter < released.length; iter++) {
            const range = released[iter];

            for (let i = range[0]; i <= range[2]; i++) {
                for (let j = range[1]; j <= range[3]; j++) {

                    if (arr[i][j] === '@') {
                        let sum = 0
                        for (let k = Math.max(i - 1, 0); k < Math.min(i + 2, arr.length); k++) {
                            for (let l = Math.max(j - 1, 0); l < Math.min(j + 2, arr[i].length); l++) {
                                if (i === k && j === l) continue;

                                if (arr[k][l] === '@') {
                                    sum++
                                }
                            }
                        }

                        if (sum < 4) {
                            result++
                            arr[i][j] = '.'
                            releasedNew.push([Math.max(i - 1, 0), Math.max(j - 1, 0), Math.min(i + 1, arr.length - 1), Math.min(j + 1, arr[i].length - 1)])

                        }
                    }
                }
            }

        }

        released = releasedNew

    }

    return result;
}
// 3664 - too low
// 9173 +
