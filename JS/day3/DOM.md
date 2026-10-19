### 1. DOM (Document Object Model) 이란?
DOM(Document Object Model, 문서 객체 모델)은 웹페이지(HTML)에 들어있는 요소들(텍스트, 이미지, 버튼 등)을 자바스크립트가 인식할 수 있는 객체(Object) 형태로 트리 구조로 만든 것

- 브라우저는 HTML 문서를 읽어 들인 뒤, 각 요소를 노드(Node)와 객체로 변환하여 DOM을 구축
- 이를 통해 자바스크립트는 HTML 구조를 변경하거나, 요소를 추가·삭제하고, 스타일을 동적으로 변경 가능

<br>

### 2. Selector(선택자)로 DOM 요소 가져오기
- 자바스크립트로 HTML을 제어하려면 먼저 조작하고 싶은 요소를 선택(Select). CSS 선택자와 유사한 방식을 사용

```javascript
    // 1. 아이디로 선택하기
    const title = document.getElementById('title');

    // 2. 클래스나 태그, CSS 선택자로 단일 요소 선택하기 (가장 많이 사용)
    const box = document.querySelector('.box');
    const firstItem = document.querySelector('ul li');

    // 3. 일치하는 모든 요소들을 NodeList로 가져오기
    const buttons = document.querySelectorAll('button');
```

<br>

### 3. Event 란?
- 이벤트(Event)란 웹페이지에서 일어나는 모든 사용자의 행동이나 브라우저의 상태 변화
- 사용자 행동: 버튼 클릭(click), 키보드 입력(keydown), 마우스 올림(mouseenter), 스크롤(scroll) 등
- 브라우저 상태: 페이지 로드 완료(DOMContentLoaded), 이미지 로딩 실패 등
- 자바스크립트는 이 이벤트가 "발생했는지"를 감지하고, 그에 맞는 반응을 실행

<br>

### 4. EventListener(이벤트 리스너)

#### 🔹 EventListener 란?
- 이벤트 리스너(Event Listener)는 특정 DOM 요소에 이벤트가 발생했을 때, 이를 감지하고 대기하고 있다가 지정된 함수(콜백 함수)를 실행해 주는 장치

#### 🔹 사용하는 목적과 이유
- 동적 인터랙션 구현: 사용자의 클릭이나 입력에 실시간으로 반응하는 웹사이트를 만들기 위해 사용
- 관심사 분리: HTML 태그 안에 직접 onclick="..." 같은 인라인 코드를 작성하는 대신, 자바스크립트 파일에서 이벤트를 관리하여 코드의 유지보수성과 가독성을 높여줌.

#### 🔹 EventListener 정의하기
- addEventListener('이벤트이름', 실행할함수) 형태를 사용

```javascript
    const inputField = document.querySelector('#username');

    inputField.addEventListener('keyup', (event) => {
        // 사용자가 입력한 키와 현재 input의 값을 확인
        console.log('입력된 값:', event.target.value);
    });
```

<br>

### 5. 마우스 감지란?
- 마우스 감지는 사용자의 마우스 움직임이나 상호작용(mousemove, mousedown, mouseup, mouseenter, mouseleave)을 추적하여 특정 동작을 수행하는 것

#### 🔹 마우스 감지 사용 예시

```javascript
    const targetBox = document.querySelector('.interactive-box');

    // 마우스가 박스 영역 안으로 들어왔을 때
    targetBox.addEventListener('mouseenter', () => {
        targetBox.style.backgroundColor = 'coral';
    });

    // 마우스가 박스 영역 밖으로 나갔을 때
    targetBox.addEventListener('mouseleave', () => {
        targetBox.style.backgroundColor = 'lightblue';
    });
```

<br>

### 6. 화살표 함수란?
- 화살표 함수(Arrow Function)는 ES6에서 도입된 함수 선언 방식의 한 종류로, 기존의 function 키워드보다 훨씬 간결하게 함수를 작성할 수 있게 해줌.

#### 🔹 화살표 함수 사용법과 기존 함수 비교

```javascript
    // 1. 기존 함수 선언 방식
    function add(a, b) {
        return a + b;
    }

    // 2. 화살표 함수 방식
    const addArrow = (a, b) => {
        return a + b;
    };

    // 3. 코드가 한 줄이라면 return과 중괄호({}) 생략 가능
    const addShort = (a, b) => a + b;
```

<br>

#### 💡 이벤트 리스너와 화살표 함수의 조합

```javascript
    const alertBtn = document.querySelector('#alert-btn');

    alertBtn.addEventListener('click', () => {
        alert('화살표 함수를 사용한 이벤트 리스너입니다!');
    });
```