import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = await fs.readFile(`${__dirname}/data.txt`, 'utf8')
const arr = data.split('\n');

export async function day3first() {
    let sum = 0;
    arr.forEach(line => {
        const max = [[0, 0], [0, 0]];
        for (let i = 0; i < line.length - 1; i++) {
            if (max[0][0] < parseInt(line[i])) {
                max[0] = [parseInt(line[i]), i];
            }
        }

        for (let j = max[0][1] + 1; j < line.length; j++) {
            if (max[1][0] < parseInt(line[j])) {
                max[1] = [parseInt(line[j]), j];
            }

        }

        sum += parseInt(max[0][0] + '' + max[1][0]);
    });

    return sum;

}
// 16437 - || 17526 - too high || 17457 -
// 17452 +

export async function day3second() {
    let sum = 0;
    arr.forEach(line => {
        const max = [[0, 0]];
        for (let i = 0; i < 12; i++) {
            if (!max?.[i]) {
                max[i] = [0, max[i - 1][1] + 1]
            }

            for (let j = max[i][1]; j <= line.length - (12 - i); j++) {
                if (max[i][0] < parseInt(line[j])) {
                    max[i] = [parseInt(line[j]), j];
                }

            }
        }
        const acc = max.map((el) => el[0]).join('')
        sum += parseInt(acc);
    });

    return sum;
}
// 173089739900584 - too low
// 173300819005913 +