import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = await fs.readFile(`${__dirname}/data.txt`, 'utf8')
const arr = data.split(',')

export async function day2first() {
    let answer = 0;

    arr.forEach(pair => {
        let [start, end] = pair.split('-').map(Number)

        while (start <= end) {
            const str = String(start)
            if (str.length % 2 === 0) {
                const left = str.slice(0, str.length / 2)
                const right = str.slice(str.length / 2, str.length)
                if (+left === +right) {
                    answer += start
                }
            }

            start++
        }

    });

    return answer
}

export async function day2second() {
    let answer = 0;

    arr.forEach(pair => {
        let [start, end] = pair.split('-').map(Number)

        while (start <= end) {
            const str = String(start)
            for (let i = 1; i <= str.length / 2; i++) { // i это длина подстроки
                if (str.length % i !== 0) continue;

                const arr = []
                for (let j = 0; j < str.length; j += i) { // j это смещение
                    arr.push(str.slice(j, j + i))
                }

                if (arr.every(el => el === arr[0])) {
                    answer += start
                    break
                }
            }

            start++
        }

    });

    return answer
}
