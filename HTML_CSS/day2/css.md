# CSS 기본 개념 및 주요 속성 정리

## 1. CSS란?
* **CSS (Cascading Style Sheets)**: HTML로 작성된 웹 문서의 디자인, 레이아웃, 시각적 스타일을 정의하는 언어입니다.
* 웹 페이지의 구조(HTML)와 디자인(CSS)을 분리하여 코드 관리와 유지보수를 용이하게 합니다.

---

## 2. Internal, External, Inline 작성 방식

### 1) Internal CSS (내부 스타일 시트)
* **설명**: HTML 문서 내부의 `<head>` 태그 안에 `<style>` 태그를 작성하여 스타일을 적용하는 방식입니다.
* **특징**: 해당 HTML 문서 전체에 일괄 적용되며, 단일 페이지 웹사이트나 테스트 작업 시 유용합니다.
* **예시**:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            background-color: orange;
            border: 1px solid black;
        }
        span {
            background-color: skyblue;
            border: 1px solid black;
        }
    </style>
</head>