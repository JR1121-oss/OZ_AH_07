# 🚀 [JS] 자바스크립트 기초 핵심 총정리

벨로그 포스팅: [공부7 JavaScript 기초 개념 정리](https://velog.io/@rin_1121/%EA%B3%B5%EB%B6%807-JavaScript-%EA%B8%B0%EC%B4%88-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)

---

## 1. 자바스크립트의 기본 자료형 (Primitive Data Types)

| 자료형 | 설명 | 예시 |
| :--- | :--- | :--- |
| **number** | 정수 및 소수점을 포함한 모든 숫자형 | `10`, `3.14` |
| **string** | 텍스트 데이터를 나타내는 문자열 | `'Hello'`, `"JavaScript"` |
| **boolean** | 참(`true`) 또는 거짓(`false`) 논리값 | `true`, `false` |
| **null** | 값이 **의도적으로 비어있음**을 명시 | `let data = null;` |
| **undefined** | 변수가 선언되었으나 **값이 할당되지 않음** | `let x;` |

---

## 2. 변수 선언 (`let` vs `const`)

* **`let`**: 재할당이 가능한 변수 선언 키워드
* **`const`**: 재할당이 불가능한 상수(Constant) 선언 키워드

```javascript
// 1. let 예시 (재할당 가능)
let count = 1;
count = 2; // ✅ 재할당 가능

// 2. const 예시 (재할당 불가능)
const maxCount = 10;
// maxCount = 20; // ❌ TypeError 발생!
```

---

## 3. 산술 연산자 및 Math 내장 객체

### 기본 산술 연산자
* `+` : 더하기
* `-` : 빼기
* `*` : 곱하기
* `/` : 나누기
* `%` : 나머지 연산

### Math 내장 객체
```javascript
Math.abs(-5);    // 5 (절대값)
Math.round(4.7); // 5 (반올림)
Math.floor(4.7); // 4 (버림)
Math.ceil(4.1);  // 5 (올림)
Math.random();   // 0 이상 1 미만의 난수 생성
```

---

## 4. 비교 연산자 및 타입 확인 (`typeof`)

### 비교 연산자
* `<`, `>`, `<=`, `>=` : 대소 비교
* `==` (동등 연산자): 값만 비교 (자동 형변환 발생)
* `===` (일치 연산자): 값 + 데이터 타입까지 엄격히 비교 *(권장)*

```javascript
1 == '1';  // true
1 === '1'; // false
```

### 타입 확인 (`typeof`)
```javascript
typeof 10;        // "number"
typeof "Hello";   // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object"
```

---

## 5. 논리 연산자

* `&&` (AND): 모든 조건이 `true`일 때 `true`
* `||` (OR): 조건 중 하나만 `true`여도 `true`
* `!` (NOT): 논리값을 반대로 뒤집음 (부정)

---

## 6. 문자열 연산 및 파이썬과의 차이점

### 문자열 연결
```javascript
// 템플릿 리터럴 (` 백틱과 ${변수명} 활용)
let name = "JR";
let message = `안녕하세요, ${name}님!`;
```

### `number` + `string` 연산 시 Python과의 차이점
* **Python**: 숫자와 문자열 `+` 연산 시 `TypeError` 발생
* **JavaScript**: 숫자가 자동으로 문자열로 암묵적 형변환되어 결합
  ```javascript
  10 + "20"; // "1020" (string)
  ```

---

## 7. 조건문 (`if`, `else if`, `else`)

```javascript
let score = 85;

if (score >= 90) {
  console.log("A 학점");
} else if (score >= 80) {
  console.log("B 학점");
} else {
  console.log("C 학점");
}
```

---

## 8. 반복문 (`for`, `while`)

```javascript
// for 문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while 문
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

## 9. 배열 (Array)

```javascript
let fruits = ["사과", "바나나", "체리"];

console.log(fruits[0]); // "사과"
fruits.push("딸기");    // 요소 추가
fruits.pop();           // 마지막 요소 제거
```

---

## 10. 객체 (Object)

```javascript
let user = {
  name: "JR",
  age: 25,
  job: "Developer"
};

// 속성 읽기 및 수정
console.log(user.name); // "JR"
user.age = 26;

// 속성 추가 및 삭제
user.location = "Seoul";
delete user.job;

// 속성 존재 여부 확인 (in)
console.log("name" in user); // true
```