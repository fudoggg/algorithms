import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = await fs.readFile(`${__dirname}/data.txt`, 'utf8')
const arr = data.split('\n')

export async function day1first() {
    let val = 50;
    let answer = 0;

    arr.forEach(el => {
        const num = +(el.substring(1, el.length))
        if (el[0] === 'R') {
            val += num
        } else {
            val -= num
        }

        val = val % 100;

        if (val === 0) answer++
    });

    return (answer);
}

export async function day1second() {
    let val = 50;
    let answer = 0;

    arr.forEach((el, i) => {
        const valCopy = val;
        const num = el.substring(1) * (el[0] === 'R' ? 1 : -1)
        val += num

        if (val / 100 >= 1 || val / 100 <= -1) {
            answer += Math.floor(Math.abs(val / 100))
        } else if (val % 100 === 0) {
            answer++
        }

        if (val > 0 && valCopy < 0 || val < 0 && valCopy > 0) {
            answer++
        }


        val = val % 100;

    });

    return (answer);
}
