import { day1first, day1second } from './day1/index.js'
import { day2first, day2second } from './day2/index.js'
import { day3first, day3second } from './day3/index.js'
import { day4first, day4second } from './day4/index.js'


const startTime = performance.now();

// console.log(await day1first());
// console.log(await day1second());
// console.log(await day2first());
// console.log(await day2second());
// console.log(await day3first());
// console.log(await day3second());
// console.log(await day4first());
console.log(await day4second());

console.log(`Время выполнения: ${performance.now() - startTime} мс`);
