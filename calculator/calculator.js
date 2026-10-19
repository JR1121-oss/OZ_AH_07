// HTML 문서가 완전히 로드된 후에 실행되도록 보장
document.addEventListener('DOMContentLoaded', () => {
    // 1. 필요한 DOM 요소들 선택하기 (QuerySelector 활용)
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');

    // 계산기 상태 변수들
    let currentInput = '0';
    let isPowerOn = true;

    // 2. 모든 버튼을 순회하며 EventListener 등록하기
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // 전원이 꺼져있고, ON/OFF 버튼이 아니라면 무시
            if (!isPowerOn && !button.classList.contains('on-off')) {
                return;
            }

            const buttonText = event.target.textContent;

            // 버튼 종류별 기능 분기
            if (button.classList.contains('number')) {
                handleNumber(buttonText);
            } else if (button.classList.contains('operator')) {
                handleOperator(buttonText);
            } else if (button.classList.contains('clear')) {
                clearDisplay();
            } else if (button.classList.contains('enter')) {
                performCalculate();
            } else if (button.classList.contains('on-off')) {
                togglePower();
            }

            // 화면 갱신
            updateDisplay();
        });
    });

    // 화면 업데이트 함수
    function updateDisplay() {
        display.value = currentInput;
    }

    // 숫자 및 소수점 입력 처리
    function handleNumber(number) {
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        } else {
            currentInput += number;
        }
    }

    // 연산자 입력 처리
    function handleOperator(operator) {
        const lastChar = currentInput.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            currentInput = currentInput.slice(0, -1) + operator;
        } else {
            currentInput += operator;
        }
    }

    // C(Clear) 버튼 - 초기화
    function clearDisplay() {
        currentInput = '0';
    }

    // Enter 버튼 - 계산 실행
    function performCalculate() {
        try {
            const result = eval(currentInput);
            currentInput = String(result);
        } catch (error) {
            currentInput = 'Error';
        }
    }

    // ON/OFF 버튼 - 전원 토글
    function togglePower() {
        isPowerOn = !isPowerOn;
        if (!isPowerOn) {
            currentInput = '';
            display.style.backgroundColor = '#222';
        } else {
            currentInput = '0';
            display.style.backgroundColor = '';
        }
    }
});