import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = (await fs.readFile(`${__dirname}/data.txt`, 'utf8'))
    .split('\n')

export async function day7first() {
    let result = 0

    const apex = new Set([data[0].indexOf('S')]) // номер элемента в строке, под которым идет "луч"

    for (let i = 0; i < data.length; i++) { // строки
        for (const a of apex) { // элементы
            if (data[i][a] === '^') { // находим разделитель
                result++
                apex.delete(a) // удаляем позицию старого луча
                apex.add(a - 1); apex.add(a + 1); // добавляем позиции новых лучей после разделителя
            }
        }

    }


    return result;
}
// 1713 - too high
// 1605 +

export async function day7second() {

    const cache = new Map();

    function checkPath(pos) {
        if (cache.has(pos.join('-'))) return cache.get(pos.join('-'))

        const [row, col] = pos

        for (let i = row; i < data.length; i++) { // строки
            if (data[i][col] === '^') { // находим разделитель
                const left = checkPath([i, col - 1])
                cache.set([i, col - 1].join('-'), left)
                const right = checkPath([i, col + 1])
                cache.set([i, col + 1].join('-'), right)
                return left + right
            }
        }

        return 1

    }

    const result = checkPath([0, data[0].indexOf('S')])

    return result;
}
// 3208 - too low
// 29893386035180 +