//  함수 (function)
// [1] 구조 : 입력 : n1, n2
// -> 처리 : n1 + n2
// -> 출력 : N
// [2] 기능 : 재사용성

function add(n1, n2) {
    const N = n1 + n2
    return n1 + n2
};

function runFunction(f, arg1, arg2) {
    return f(arg1, arg2) // add(4,2) -> 6
};

let result = runFunction(f, arg1, arg2)
console.log(result);

// def add(n1, n2)
// ...
//    return n1 + n2

// 함수 호출 (call, 부르기) + 입력값까지 넣음 -> 실행
let result = add(4, 10);
console.log(result);
// console.log() 라는 함수 호출 -> add() 호출해서 나온 값을 -> console.log()에 전달
console.log(add(4, 10));
console.log(add); // [Function: add]

let foo = add;
console.log(foo(4, 2));  // 6
