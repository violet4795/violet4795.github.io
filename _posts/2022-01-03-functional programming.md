---
title: "함수형 프로그래밍"
excerpt: "함수형 프로그래밍이란?"

categories:
  - programming paradigm
tags:
  - programming paradigm
  - functional programming
last_modified_at: #2022-01-03T08:06:00-05:00
---

# 함수형 프로그래밍이란?
명령형 프로그래밍, 객체지향 프로그래밍 같은 프로그래밍 패러다임 중 하나인 함수형 프로그래밍.

- 프로그램을 함수들로만 구성시킨다.

- 대입문을 없애는 방향으로 코드 스타일을 구성한다.


# 갑자기 왜 함수형 프로그래밍이 인기인지?
자바 1.8, C++ 11 버전에서 메이저 언어들이 함수형 프로그래밍을 지원하기 시작했다.

함수형 프로그래밍 언어는 아주 예전부터 존재해왔다. 
개념도,

근데 함수형 프로그래밍은 처음부터 인기가 있지 않았다.

위키피디아 왈 

수학, 학계에서 주로 사용되는 프로그래밍 언어 및 개념 이라고 한다.

왜 요새 인기가 있는걸까?

구글에 why popularity functional programming 로 검색하면   
[why-functional-languages](https://stackoverflow.com/questions/36504/why-functional-languages)   
[why-popularity-functional-programming](https://www.quora.com/What-caused-the-rise-in-popularity-of-functional-programming-What-changed-and-brought-functional-programming-to-the-forefront-of-business-programming)

요런 글들을 보다보면 정말 여러 의견이 있는데,

[Matt Nunogawa](https://www.quora.com/profile/Matt-Nunogawa)의 답변이 인기가 좋았다.

>트랜지스터 밀도 성장이 45nm 부근에서 느려지기 시작했을 때 무어의 법칙을 유지하는 유일한 솔루션은 수평으로 확장하는 것이었습니다.
>CPU가 지원하는 멀티코어의 개수가 늘어나고, 작업의 안정성 요구사항이 늘어났다.
>
>그리고 대기업이 다루는 데이터센터들에서 사용하는 프로그램은 빠르겠지만, 
>데이터센터에서 돌리는 프로그램은 여전히 한계가 있다.   
>
>CPU의 속도를 늘릴 수 없을때 수평적 확장을 하듯이   
>데이터 센터도 수평적 확장을 해야할때 매우 유용하다.

# 함수형 프로그래밍 장점이 뭐길래? 
다시말해 특징인데   

함수형 프로그래밍언어를 그대로 따른다면,     
대입문이 없다.   
변수가 없다.      
부작용(side effect)이 없다. <- (?)   
상태가 없다.   

프로그래밍을 오로지 함수로만 구성한다.   
여기서 함수는 순수 함수(pure function)이다.   

순수 함수는 인풋과 아웃풋에 집중하며,   
부작용(side effect)이 없다.   
함수의 실행이 외부의 환경에 영향을 미치지 않는 것을 의미한다.   

```js
var a = 'a'

var foo = function(string) {
    console.log(string) // not pure (output과 무관)
    return a + string // not pure (외부 변수 참조)
}

var bar = function(string) { // pure function
    return 'a' + string // pure 
}
```

또한 불변하는 변수도 특징인데,

js로 따지면 let보단 const라는 것이다.    
굳이 공간을 더 쓰더라도 불변 변수를 하나 더 만드는 것으로     
변수를 쓰지 않는다는 프로그래밍 패러다임을 지킨다.    

```js
let a = 'a' // b라는 값이 필요하면 
a = 'b' // 이러면 그만인것을

const a = 'a' // b라는 값이 필요하면
const b = 'b' // 굳이 하나 더 선언한다.
```

이렇게 불변하는 변수, 순수 함수로 인해 나오는 이점들은 

>1.순수 함수가 불순 함수보다 낫다.   
>2.순수 함수는 테스트하기 더 쉽습니다.   
>3.함수형 프로그래밍으로 버그 감소        
>4.기능 코드는 상태를 격리하는 경향이 있어 이해하기 쉽습니다.   
>5.더 신뢰할 수 있는 함수 서명   
>6.동시성은 더 쉽게 안전하게 유지됩니다.   
>7.재귀는 더 간단하지만 배우기가 반드시 더 쉬운 것은 아닙니다.   
>8.불변 변수는 부작용을 줄입니다.   
[benefits-of-functional-programming](https://qvault.io/clean-code/benefits-of-functional-programming/)


# 만능은 아닌거같은데 단점도있구만
같은 크기의 불변 변수를 만들려면 기본적인 생각으론 2배의 용량이 필요하다.
트리구조와 참조를 통해 효율을 늘리는 방법도 있지만, 여전히 일반적인 변수보다는 필요 메모리가 크다.

그리고 반복문 대신 재귀문을 사용한다.     
재귀문은 코드를 이해하는데는 쉬워보인다.      

```js
const multiple10 = function(number){
    return 10 * number;
}

console.log(multiple10(multiple10(10))) // 1000
```
그러나 재귀는 보기 쉽지만, 만들기는 절대 쉽지 않다.       


# 뭐 그럼 아무대나 다씀? 언제쓰는건데
결국 특정 문제를 잘 해결하기 위한 프로그래밍 기법 중 하나       

비상태성이어야 한다면,      
동시성이 보장되는 확장을 필요로 한다면,     
쓰는 것이 좋다.     
[when-and-when-not-to-use-functional-programming](https://betterprogramming.pub/when-and-when-not-to-use-functional-programming-73dbcb5d0a85)