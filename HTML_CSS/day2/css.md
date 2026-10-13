## 1. CSS란?

CSS (Cascading Style Sheets) : HTML로 작성된 웹 문서의 디자인, 레이아웃, 시각적 스타일을 정의하는 언어. 웹 페이지의 구조(HTML)와 디자인(CSS)을 분리하여 코드 관리와 유지보수를 용이하게 함


## 2. Internal, External, Inline 각각의 방식



1) Internal CSS (내부 스타일 시트)

  설명: HTML 문서 내부의 `<head>` 태그 안에 `<style>` 태그를 작성하여 스타일을 적용하는 방식입니다.
  특징: 해당 HTML 문서 전체에 일괄 적용되며, 단일 페이지 웹사이트나 테스트 작업 시 유용합니다.
  예시: 
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

<head>

```



2) External CSS (외부 스타일 시트)

설명: 별도의 CSS 파일(.css 확장자)을 만들어 작성하고, HTML 문서의 `<head>` 태그 안에서 `<link>` 태그로 불러오는 방식입니다.
특징: 가장 권장되는 표준 방식입니다. 여러 HTML 문서에 동일한 스타일을 적용할 수 있어 코드 재사용성과 유지보수성이 뛰어납니다.
예시:
```html

<head>

  <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Resume</title>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">

    

    <!-- style.css -->

    <link rel="stylesheet" href="./style.css">



    <!-- Google Font -->

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap" rel="stylesheet">

<head>

```



3) Inline CSS (인라인 스타일)

설명: HTML 요소의 `style` 속성에 직접 스타일을 입력하는 방식입니다.
특징: 해당 개별 요소에만 즉시 적용되며 선택자 중 우선순위가 매우 높습니다. 하지만 코드가 지저분해지고 재사용이 불가능하므로 가급적 사용을 지양합니다.
예시:
```html

<p style="color: red; font-size: 16px; font-weight: bold;">

  이 텍스트는 빨간색, 16px 크기, 굵은 글씨가 적용됩니다.

</p>



<div style="background-color: yellow; padding: 10px; border: 1px solid black;">

  노란색 배경에 테두리가 있는 상자입니다.

</div>

```

<br>![](https://velog.velcdn.com/images/rin_1121/post/1e532d83-0861-4862-8007-189f3d0c7398/image.png)







## 3. CSS Selector (선택자)

스타일을 적용할 HTML 요소를 타겟팅하고 선택하는 구문
1) 전체 선택자(*) : 문서 내 모든 요소 선택

    2) 태그 선택자(element) : 특정 HTML 태그 전체를 선택 (ex) p, h1, div 등)

    3) 클래스 선택자(.classname) : 특정 `class` 속성값을 가진 요소를 선택하며, 재사용이 가능 (ex) .btn)

    4) 아이디 선택자(#idname) : 특정 `id` 속성값을 가진 요소를 선택하며, 페이지 내 단 하나만 존재하며 고유 요소에 사용 (ex) #header)

    5) 복합/자식/자손 선택지 : 

    자손 선택자(A B) : A요소 내부의 모든 B요소 선택
        - 자식 선택자(A>B) : A요소의 직계 자식인 B요소만 선택



## 4. style 속성

1) text 관련

a. font-size 

설명 : 텍스트의 크기 지정
주요 단위 : `px`(고정 크기), `rem`(최상위 요소 기준 상대 크기), `em`(부모 요소 기준 상대 크기)
    

b. font-weight

설명 : 텍스트 굵기 지정
주요 값 : `normal`(기본 400), `bold`(굵게 700, 또는 100부터 900까지 100단위 숫자)


c. text-align

설명 : 블록 요소 내부 텍스트의 정렬 방식 지정
주요 값 : `left`(왼쪽 정렬), `center`(중앙 정렬), `right`(오른쪽 정렬), `jestify`(양쪽 정렬)
<br>    



2) box model

웹 페이지의 모든 HTML 요소를 둘러싸고 있는 박스(Box) 영역


a. margin

설명 : 테두리(border) 바깥쪽의 여백. 다른 요소와의 간격을 조절 
예시 : `margin: 20px;` (상하좌우 모두 20px)
    

b. padding

설명 : 테두리(border) 안쪽의 여백. 테두리와 내부 콘텐츠(content) 사이의 간격을 조절
예시 : `padding: 10px 20px;` (상하 10px, 좌우 20px)
    

    

c. border

설명 : 요소의 테두리 선을 지정. 선의 두께, 스타일, 색상을 순서대로 설정
예시 : `border: 1px solid black;` (1px 두께의 검은색 실선)
    

d. content

설명 : 텍스트, 이미지 등 요소의 실제 내용물이 위치하는 가장 안쪽 영역
    

e. width

설명 : 요소의 너비(가로 크기)를 지정. 기본적으로 content 영역의 너비를 의미
    

f. height

설명 : 요소의 높이(세로 크기)를 지정. 기본적으로 content 영역의 높이를 의미
    

g. box-sizing

설명 : 요소의 전체 크기(width, height) 계산 방식을 결정하는 속성
주요 값 : 
    
    1) content-box : 지정한 `width`가 content 영역만의 크기가 되며, `padding`과 `border`를 더할수록 전체 요소 박스 크기 커짐
    2) border-box : 지정한 `width` 안에 `padding`과 `border`의 두께까지 포함되어 레이아웃 계산이 훨씬 용이
