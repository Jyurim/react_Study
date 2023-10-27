- SCSS에 대해 설명해주세요.
    
    코드의 재활용성과 가독성을 올리는 등 CSS 단점을보완
    
    개발의 효율을 올리기 위해 등장한 CSS 전처리기 언어
    
    ⇒ CSS를 편리하게 사용할 수 있도록 하며 추가 기능 또한 있는 확장판 스크립트 언어
    
    CSS는 HTML 태그를 꾸미거나 효과를 넣어 주는 등 디자인 요소를 추가할 때 사용하는 **전처리 과정**입니다. **프로젝트 규모가 커지면** CSS는 불가피하게 가독성이 떨어지는 등 **유지보수의 어려움**을 주는 요소가 됩니다. 코드의 재활용성을 올리고, 가독성을 올리는 등 **CSS에서 보이던 단점을 보완**하고, 개**발의 효율을 올리기 위해** 등장한 개념이 SASS/SCSS라고 합니다.
    
    1. 변수할당
        
        변수로 할당하여 재사용높일수 있다
        
    
    ```css
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;
    
    body {
      font: 100% $font-stack;
      color: $primary-color;
    }
    ```
    
    1. 중첩구문
        
        쉬운 구성과 높은 가독성
        
        ```css
        nav {
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
        
          li { display: inline-block; }
        
          a {
            display: block;
            padding: 6px 12px;
            text-decoration: none;
          }
        }
        // css 라면 nav ul {} nav li{} 이런식으로 선언
        ```
        
    2. 모듈화
        
        파일을 분할하고 모듈화 할수있음
        
        ```css
        /* _base.scss */
        $font-stack: Helvetica, sans-serif;
        $primary-color: #333;
        
        body {
          font: 100% $font-stack;
          color: $primary-color;
        }
        --- 
        /* styles.scss */
        @use 'base';
        
        .inverse {
          background-color: base.$primary-color;
          color: white;
        }
        ```
        
    3. 믹스인
        
        `default parameter` 를 지정할 수 있고 `parameter` 를  받아서 속성부여 가능
        
        ```css
        /* SCSS */
        @mixin theme($theme: DarkGray) {
          background: $theme;
          box-shadow: 0 0 1px rgba($theme, .25);
          color: #fff;
        }
        
        .info {
          @include theme;
        }
        .alert {
          @include theme($theme: DarkRed);
        }
        .success {
          @include theme($theme: DarkGreen);
        }
        ```
        
    4. 확장 & 상속
        
        extend 사용시 css 를 상속받아서 사용가능하다
        
    
    ```css
    /* SCSS */
    /* This CSS will print because %message-shared is extended. */
    %message-shared {
      border: 1px solid #ccc;
      padding: 10px;
      color: #333;
    }
    
    /* This CSS won't print because %equal-heights is never extended. */
    %equal-heights {
      display: flex;
      flex-wrap: wrap;
    }
    
    .message {
      @extend %message-shared;
    }
    
    .success {
      @extend %message-shared;
      border-color: green;
    }
    
    .error {
      @extend %message-shared;
      border-color: red;
    }
    
    .warning {
      @extend %message-shared;
      border-color: yellow;
    }
    ```
    
    1. 연산자
        
        여러가지 수학적 기능 사용가능
        
        ```css
        /* SCSS */
        @use "sass:math";
        
        .container {
          display: flex;
        }
        
        article[role="main"] {
          width: math.div(600px, 960px) * 100%;
        }
        
        aside[role="complementary"] {
          width: math.div(300px, 960px) * 100%;
          margin-left: auto;
        }
        ```
        
    
    절차
    
    1. Sass가 제공하는 문법을 기반으로 코드를 작성
    2. 이를 컴파일
    3. CSS 파일을 빌드
    
    단점 
    
    - 전처리기를 위한 도구 필요
    - 컴파일 시간 소요
    
    ---
    
- postition 속성에 대해 설명해주세요.
    
    CSS `position` 속성은 문서 상에 요소를 배치하는 방법을 지정합니다.
    
    top, right, bottom, left 속성이 요소를 배치할 최종 위치를 결정합니다.
    
    `static`은 원래 있어야할 위치이며 기본값입니다.
    
    `relative`는 static인 상태에서의 위치를 기준으로 top, right, bottom, left로 지정된 거리만큼 이동하여 위치합니다.
    
    `absolute`는 가장 가까운 static이 아닌 포지션을 가진 부모에 대해 상대적인 위치를 가집니다. 만약 포지션을 가지는 부모가 없다면 body에 대해 상대적인 위치를 가지게 됩니다.
    
    `fixed`는 위치를 지정하면 뷰포트(현재 화면에 보여지고 있는 직사각형의 영역, 전체화면)에 대해서 상대적인 위치를 차지하게됩니다.
    
    `sticky`는 사용자의 스크롤 위치를 기반으로 배치됩니다.
    
    relative처럼 동작하다가 화면이 스크롤되어 요소가 화면 밖으로 벗어나려고 하면 fixed처럼 동작하여 뷰포트에 고정됩니다.
    
    좌표를 지정해주기 위해 `left`, `right`, `top`, `bottom` 속성과 함께 사용한다.
    
    position을 absolute나 fixed로 설정 시 가로 크기가 100% 되는 block 태크의 특징이 사라지게 된다.
    
    ---
    
- display 속성에 어떤 것들이 있는지 설명해 주세요.
    
    `display` 속성은 요소를 어떻게 보여줄지를 결정합니다.
    
    주로 4가지 속성값이 쓰이는데, 태그마다 기본값이 다릅니다.
    
    `none` : 보이지 않음
    
    `block` : 블록 박스  : 한줄에 하나의 요소 표시
    
    `inline` : 인라인 박스 : 한줄에 여러개의 요소 표시
    
    `inline-block` : block과 inline의 중간 형태
    
    ### none
    
    요소를 렌더링하지 않도록 설정
    
    `visibility` 속성을 `hidden`으로 설정한 것과 달리, **영역도 차지하지 않는다.**
    
    ### block
    
    기본적으로 가로 영역을 모두 채우며, block 요소 다음에 등장하는 태그는 줄 바꿈이 된 것처럼 보인다.
    
    이는 word 같은 문서에서 문단을 표시할 때, 한 문단이 끝난 뒤에 나타나는 요소는 항상 다음 줄에 표시되던 것과 비슷한 맥락
    
    <div><p><h><li> 등
    
    width, height 속성을 지정할 수 있다.
    
    block 요소 뒤에 등장하는 태그가 이전 block 요소에 오른쪽에 배치될 수 있어도 항상 다음 줄에 렌더링 된다.
    
    ### inline
    
    줄 바꿈이 되지 않는다.
    
    width, height를 지정할 수 없다.
    
    word 같은 문자에서 볼드, 이탤릭, 색상, 밑줄 등 글자나 문장에 효과를 주기 위해 존재하는 단위라고 할 수 있다.
    
    inline 요소 뒤에 나오는 태그 또한 줄바꿈 되지 않고 바로 오른쪽에 표시된다.
    
    <span> <b> <i> <a> 등
    
    ### inline-block
    
    block과 inline의 중간 형태
    
    줄바꿈이 되지 않지만 크기를 지정할 수 있다.
    
    InternetExplorer 7이하에서는 사용할 수 없다.
    
    ---
    
- 시맨틱 마크업에 대해 설명해주세요
    
    의미를 잘 전달하도록 문서를 작성하는 것
    
    - 헤더/푸터에 **`<header>`**와 **`<footer>`** 사용
    - 메인 컨텐츠에 **`<main>`**과 **`<section>`** 사용
    - 독립적인 컨텐츠에  `<article>`사용
    - 최상위 제목으로 **`<h1>`** 사용
    - 순서가 없는 목록으로 **`<ul>`**과 **`<li>`** 사용
    - 내비게이션에 `<**nav>**`사용
    
    특징
    
    - 검색엔진이 시맨틱 태그를 중요한 키워드로 간주하기 때문에 **검색엔진 최적화(SEO)에 유리합니다.**  ⇒ 웹 표준에 맞춘다.
    - **웹 접근성** 측면에서, 시각장애가 있는 사용자로 하여금 그 의미를 훨씬 잘 파악할 수 있습니다.
    - 단순한 `div` , `span` 으로 둘러싸인 요소들보다 코드를 볼 때 **가독성이 더 좋습니다.**
