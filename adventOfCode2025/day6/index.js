import fs from 'fs/promises'
import { dirname } from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rawData = await fs.readFile(`${__dirname}/data.txt`, 'utf8')

export async function day6first() {
    const data = rawData
        .split('\n')
        .map((line) => line.split(' ')
            .filter((el) => el)
            .map((el) => { return Number(el) ? Number(el) : el })
        )

    let result = 0

    for (let i = 0; i < data[data.length - 1].length; i++) {
        let subtotal = data[data.length - 1][i] === '*' ? 0 : 1

        for (let j = 0; j < data.length - 1; j++) {
            if (data[data.length - 1][i] === '*') {
                subtotal *= data[j][i]
            } else {
                subtotal += data[j][i]
            }
        }

        result += subtotal
    }

    return result;
}
// 4580995422905 +

export async function day6second() {
    let result = 0

    const data = rawData.split('\n')

    const preparedData = []
    let index = [0, data[data.length - 1].length - 1]

    for (let i = data[data.length - 1].length - 1; i >= 0; i--) { // итерация по элементам операций с конца
        const element = data[data.length - 1][i]; // элемент строки операций
        if (element !== ' ') { // на условии ловим длину ограничения столбца в строке))
            index[0] = i

            let sum = element === '+' ? 0 : 1

            for (let k = index[1]; k >= index[0]; k--) { // проходимся по индексу среза
                let num = ''
                for (let j = 0; j < data.length - 1; j++) { // проходимся по столбцам в срезе (кроме операций)
                    num += data[j][k]
                }
                element === '+' ? sum += parseInt(num) : sum *= parseInt(num)
            }

            result += sum

            index = [i, i - 2] // -2 тк разделитель между рядами - ' '
        }
    }

    return result;
}
// 10875057285868 +