// 배열 (Array)
let numbers = [1,2,3,4];

console.log(numbers[0]) // 1
console.log(numbers.at(-1))

for (const num of numbers) {
    console.log(num);
}

console.log(numbers.slice(1, 3));