import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = (await fs.readFile(`${__dirname}/data.txt`, 'utf8')).split('\n')

const separator = data.findIndex((el) => el === '')


const arrRange = data.slice(0, separator).map((el) => el.split('-').map(Number))
const arrProduct = data.slice(separator + 1)

export async function day5first() {
    let result = 0
    for (let i = 0; i < arrProduct.length; i++) {
        for (let j = 0; j < arrRange.length; j++) {
            if (arrProduct[i] >= arrRange[j][0] && arrProduct[i] <= arrRange[j][1]) {
                result++;
                break;
            }
        }
    }
    return result;
}
// 980 - 
// 707 +

export async function day5second() {
    let result = 0
    let arrIndex = 0

    arrRange.sort((a, b) => a[0] - b[0])
    const arr = [arrRange[0]]

    for (let j = 1; j < arrRange.length; j++) {
        if (arrRange[j][0] <= arr[arrIndex][1]) {
            if (arrRange[j][1] > arr[arrIndex][1]) {
                arr[arrIndex][1] = arrRange[j][1]
            }
        } else {
            arr.push(arrRange[j])
            arrIndex++
        }

    }

    for (let i = 0; i < arr.length; i++) {
        result += arr[i][1] - arr[i][0] + 1
    }

    return result;
}
// 359431286380668 - too low
// 361615643045059 +
