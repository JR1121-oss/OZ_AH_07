// 동등 비교: 두 값이 같은지 비교
// 결과 -> boolean

// python -> 동등 비교 안에 자료형 비교
console.log(10==10); // true

// JS -> 동등 비교시, 자료형이 다르면 String 취급
console.log(10=='10'); // true

// 자료형까지 비교 (권장)
console.log(10 === '10'); // false