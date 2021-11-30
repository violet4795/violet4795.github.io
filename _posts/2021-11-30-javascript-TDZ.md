---
title: "TDZ"
excerpt: ""

categories:
  - JavaScript
tags:
  - JavaScript
  - ES6
last_modified_at: 2021-11-30T23:43:00
---

<!-- 난 TDZ에 대해 모르니까 다시보면 기억나게 간단히 메모하고자 한다.   -->

javascript는 ES6(ES2015)에 오면서
let, const, async, await, promise, class.. 등의
문법을 지원하게 된다.

ES5이하의 JS 변수는 var가 유일했다.  
  
이전에는 선언과 할당으로 
javascript 변수 lifecycle은 선언, 초기화, 할당 3단계로 이루어져 있고,

let, const는 선언 - 초기화 - 할당을 따로   
var는 선언 - 초기화를 동시에 처리하고 할당을   
function은 선언 - 초기화 - 할당이 동시에   

수행한다.

아무튼 TDZ가 그래서 뭐냐면 Temporal Dead Zone 이라하고

선언 - (TDZ) - 초기화  

여기가 TDZ인데 여기서 참조를 하면 에러를 뿜는다.

TDZ의 영향을 받는 구문은 

ES6문법들인 let, const, class,  

상속받은 클래스가 super()를 사용하기 전의 코드들  

default function parameter

들이 있다.


참조 :   
가장 쉽게 설명되어있다. [https://noogoonaa.tistory.com/78](https://noogoonaa.tistory.com/78)   
예시가 풍부하다. [https://ui.toast.com/weekly-pick/ko_20191014](https://ui.toast.com/weekly-pick/ko_20191014)  
가장 깊다. [https://evan-moon.github.io/2019/06/18/javascript-let-const/](https://evan-moon.github.io/2019/06/18/javascript-let-const/)  
