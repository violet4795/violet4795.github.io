---
title: "나중에 블로깅하고 싶은 주제들"
excerpt: ""

categories:
  - 
tags:
  - 
last_modified_at: #2021-12-21T10:01:00
---


# JS 

## 실행 컨텍스트
- 동작 원리
자바스크립트에서 가장 중요한 개념을 꼽으라면 실행 컨텍스트인데,
자바스크립트는 실행 될 때 실행 가능한 코드(전역 코드, 함수코드, eval)가 
실행 될 때의 환경을 스택형태로 쌓아나가며 기억하는 것을 의미합니다.

실행컨텍스트는 크게 3가지 범주로 나뉘는데요.
valiable object (VO)
scope chain (SC)
this 
입니다

실행 컨텍스트의 첫번째 실행 단계는 전역 컨텍스트입니다.
전역컨텍스트는 먼저 global valiable object를 만들어냅니다.
GO라고 부를게요.
GO안에는 전역적으로 선언된 변수가 존재합니다.
그 다음엔 스코프체인을 만들죠
이 글로벌 컨텍스트가 가리킬 스코프 체인의 0번째에 방금만든 전역객체를 담아두겠습니다.

그다음엔 this를 바인딩합니다.
여기서 this는 global이 되겠네요. 현재 아무것도 실행한것이 없는 전역 컨텍스트상태니까요.

만약 전역컨텍스트안에서 쭉 여러 실행문들을 만나며 실행하다가
eval이나 function을 실행하는 코드를 만나면 새로운 실행 컨텍스트를 실행합니다.

기존 실행되던 컨텍스트를 잠시 대기상태에 두고 새로운 컨텍스트를 만듭니다.

### 클로저
closer는 선언된 어휘가 선언된 어휘의 환경을 기억하는 것이다.
앞서 실행 컨텍스트를 생성할때, 
variable object 를 만든다.(실행 객체)
이때 실행객체에서 생성된 함수들은 각자의
함수 스코프를 갖는다.
이는 ```[[scope]]``` 라는 프로퍼티로 설정된다.
```[[Scopes]]``` 프로퍼티는 자신의 실행 환경(Lexical Enviroment)과 
자신을 포함하는 외부 함수의 실행 환경과 전역 객체를 가리키는데
이것이 클로저이다.




### 호이스팅
### this
### 

# 웹 동작원리
웹은 브라우저안에서 동작한다.
브라우저는 사용자의 요청을 웹페이지를 통해 받고,
naver.com이라는 도메인으로 접속을 한다면
먼저 국내 naver.com을 호스팅하는 도메인서버가 설정된 ip로 요청을보내준다.
서버는 요청을 처리할거고 응답을 html,css,js파일, 이미지 등등의 리소스파일들을 응답할 것이다.
브라우저는 해당 요청을 받고 엔진에 내장된 HTML 파서와 CSS파서를 통해
DOM트리와 CSSOM트리로 파싱되고
이둘은 결합하여 렌더 트리로 변환됩니다.

여기까지가 브라우저가 이해하기까지의 render트리로 변경하는 construction part입니다.
이후는 render 트리로 브라우저밖 화면에 그리기 시작합니다. ( operation part ) 




# HTML
# CSS


<!-- # 경력 정리
## 써봤던 기술들
### VueJS
### 
## trouble shooting 경험
## 코테 로우 미들급
 -->


# 기타 개념들
## 쿠키 세션 토큰

쿠세크

## 명령형 프로그래밍 선언형 프로그래밍
명령형 프로그래밍과 선언형 프로그래밍

커피를 먹고싶어요.
라는 구문을 프로그래밍적인 처리를 입힌다고 생각한다면?

명령형 프로그래밍은 
원두를 볶기위해 커피를 사옵니다.
커피를 기계에넣고 원액을 뽑습니다.
물등의 추가 기호 소스들을 추가합니다.
커피를 큰컵이나 작은컵에 선택해서 담습니다.
등의 처리를 직접 다 구현을 하는것을 의미하고

선언형 프로그래밍은
커피를 먹는다.

정도로 말하면 끝나는 개념인데
물론 추가 파라미터는 존재한다. 어떤커피 어떤원액 아메리카노인지 에스프레소인지 등등의 파라미터를 넣는다는것은 동일하다.

아무튼 커피만드는 작업은 내가안하니까 
내가 직접 손대진 않겠다. 는 것이 선언형 프로그래밍과 명령형 프로그래밍의 차이이다.

누가 대신해주든, 커피집에 주문을 하든지 
내가 안한다는것. 누군가가 해주는 것을 대신 쓴다는것.



## MVC? MVC2? MVVM? 
## WEBPACK이란?


## interview 질문들

### token을 썼을때, 세션과 어떤차이?
세션처리를 위한 백엔드 서버가 존재하는지 여부가 가장 큰차이
제대로 답변 못한듯함.
### token 강제 만료하는 방법?
해당 구현은 해본적이 없음.
### 다국적 언어방법 사용?
해본적이 없어서 모른다고 답변
### vue react 차이점?
### 컴포넌트 단위 작성해본적이 있는지?
## 모듈 패턴이란?
모듈패턴은 전체어플리케이션의 일부를 독립된 코드로 분리하여 만드는것.
javascript 코딩 패턴 중 하나다.

javascript에서는 클로저나 익명함수를 통해 구현되며,

장점으로는
public한 공간에서 private한 변수를 쓸 수 있다.
그리고 큰 어플리케이션을 작은 모듈들로 나누어 설계가 가능하다.
묵시적 전역선언을 피하고, 은닉, 다형성, 상속을 통해 객체 지향적인 설계가 가능해진다.
[ben cherry - module pattern](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

## 이벤트 버블링 이벤트 캡쳐 이벤트 위임
이벤트 버블링은 발생한 이벤트가 부모 태그를 타고 전파되는 것.

이벤트 캡처은 발생한 이벤트가 하위 태그를 타고 전파되는 것. 

캡처링은 기본적으로 비활성화 되어있으며 이벤트를 달아줄때 capture:true 옵션을 줘서 활성화가 가능하다.

이벤트가 상위 태그를 타고 이동한다?

p태그에 이벤트 달고 난 뒤에 새로 생겨난 p태그에도 이벤트를 달고싶으면

매번 달아줘야하나? 하는 문제는 어떻게하면 효율적인가

p태그들을 하나의 상위태그를 감싸서 거기에 이벤트를 달아주면

버블링덕분에 상위태그에 있는 이벤트 감지가 가능하다.

[event bubbling, capture, delegation](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)


## 브라우저 동작원리

## 쿠키와 세션

### 세션이란?

쿠키와 세션의 공통점    
HTTP프로토콜의 비상태성(stateless), 비연결성(connectless)을 보완하기 위해 사용된다.



## 로컬스토리지, 세션스토리지, 쿠키, 세션, 토큰
세션은 쿠키보다 안전하고, 쿠키보다는 서버가 처리하는 속도덕에 약간 느리다.   

하지만 용량에 제한이 없다.

세션은 결국 쿠키를 사용하긴 한다. SESSION_ID값으로 서로 주고받으며 세션이 발급되었음을 증명하고,   

실질적인 값은 서버가 담당한다.

쿠키는 클라이언트가 데이터를 갖고있으며 4KB용량에 300개까지 밖에 가질 수 없고,

한 도메인당 20개까지의 제한이 걸려있다.

보안적인 측면에서 세션은 데이터가 서버에있고, 쿠키는 클라이언트가 쥐고있기에

보안은 세션이 유리하다.

세션이 좋다고 막 쓰지않고, 쿠키를 쓰는이유는 세션처리를 서버가 담당하기 때문에,

서버의 부하를 줄이는데에 있다.

쿠키도 좋지만.. 쿠키의 용량, 보안적인 측면의 제한을 극복하기 위해 

HTML5에서 추가된 저장소, 웹스토리지가 있다.

웹스토리지의 두가지 영역 세션스토리지와 로컬스토리지

세션스토리지와 로컬스토리지의 차이점은 영구성이다.

로컬스토리지 데이터는 사용자가 지우지 않는 한 계속 남아있다.

세션스토리지 데이터는 윈도우나 브라우저 탭을 닫을 경우 사라진다.


토큰은 쿠키나 웹스토리지에 저장된다. 마찬가지로 stateless하며, 


... TODO


## 익명함수와 일반함수, 화살표함수(ES6) 차이점
화살표함수특 : 일반함수와 다르게 this바인딩 과정이 없음. 그래서 전역이아닌 나를 호출한 놈이 this로 바인딩 된 채로 작동함


## 디바운싱과 쓰로틀링?
[출처 : https://dev-note-97.tistory.com/278?category=912917](https://dev-note-97.tistory.com/278?category=912917)
```js
document.addEventListener("scroll", () => {
    const scrollValue = document.documentElement.scrollTop;
    console.log(scrollValue);
})
```
해당 소스를 아무 스크롤이 있는 페이지에 넣고 스크롤링 해보자.   
![스크롤...]({{ "/assets/images/scroll_infinity.png" | relative_url }})   
어마어마한 스크롤을 볼 수 있다.   

```js
// 디바운싱: 이벤트가 맨 마지막에만 발생하도록!
let timer;

document.addEventListener("scroll", () => {   
    if (timer) {   
        clearTimeout(timer); 
    }
    timer = setTimeout(() => {
        const scrollValue = document.documentElement.scrollTop;
        console.log(scrollValue);
    }, 500);
})



// 쓰로틀링: 이벤트가 한번 발생하면 일정 시간 동안은 발생하지 않음!
let timer;

document.addEventListener("scroll", () => {
    if (!timer) {
        timer = setTimeout(() => {
            timer = null;
            const scrollValue = document.documentElement.scrollTop;
            console.log(scrollValue);
        }, 500);
    }
})
```

디바운싱은 ajax, axios같은 서버이벤트 콜같은 정확한 시점이 필요한 때에 사용된다.

쓰로틀링은 성능문제, 스크롤을 오르내릴때 사용되며, 둘은 서로 바꾸어 구현도 가능하다.

왜냐하면 실행 수를 제한하는 공통점이 있기때문

## 클로저와 VueX, redux 그리고 메모리 관리 
variable object = {key, value 형태로 쭉 이어지는 변수들... }

[0]은 나고 1은 내부모 이런식으로 전역 scope 까지 list형태로 이어지는 context scope

만약 최하위 scope에 있는 함수가 클로저가 형성되어 전역변수까지 전부 이어지는데, 이거하나때문에 모든 variable object들이 다 기억 되는 상황.

그 양이 얼마나 있을지는...

예를 들어 VueX react에서는 redux인데, 이들은 실제로 클로저로 구현되어 있습니다.

redux, VueX 둘다 여러가지 컴포넌트에서 전역적으로 상태관리를 하기 위함에 목적을 둔 라이브러리인데, 

여기에 들어간 참조값들은 브라우저가 꺼지기 직전까지 직접초기화 하지않는한, 사라지지 않습니다.

이러한 메모리 구조는 효율적이라고 보긴힘들죠.

## prototype과 class type 진짜 뭐가다른건지 상속 그놈의 상속


## JSON XML 차이점?

json xml 두개는 데이터 전달에 목적을 둔다.

## REST API 디자인 방법?

REST API ? 
## HTTP/0.9, HTTP/1.0,  HTTP/1.1, HTTP/2.0,  HTTP,  HTTPS 의 특징들

#### HTTP/0.9 
최초의 문서화 버전   
메서드는 GET뿐이오  
헤더도 없소   
html파일만 전송가능했소   
문제가 생기면 HTML파일안에 문제의 설명과 함께 되돌려져 보내짐.

#### HTTP V1.0
버전정보가 GET라인에 붙는 형태로 붙기시작함   
상태코드도 응답의 시작라인에 붙음     
HTTP 헤더가 붙기시작했다. 그로인해 메타데이터와 확장가능해짐.   
```HTML
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
A page with an image
  <IMG SRC="/myimage.gif">
</HTML>

<!--위 요청에서 이미지 내려받을때의 응답-->
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```


[wiki_HTTP](https://ko.wikipedia.org/wiki/HTTP)
[mozila_evolution_of_HTTP](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
## serializable // 직렬화는 뭘까 deserializable // 이건 병렬화인가?

### 그리드 하단 리스트 렌더링이 잦게되는 부분은 어떻게해야하는가?
컴포넌트로 필요부분을 감싸서, 전후 DOM을 비교하거나
가상 DOM을 이용해, 바뀐부분만 렌더링이 되도록 구성해야함.

### 할말이 너무많은데 

### 왜 우리회사에...
### 인성면접...