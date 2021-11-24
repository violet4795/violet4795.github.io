---
title: "log4j log4j2 logback slf4j"
excerpt: ""

categories:
  - java
tags:
  - java
last_modified_at: 2021-11-24T12:47:00
---

spring boot 토이 프로젝트에 간단한 로그를 남기고싶어서 뭘쓸까하다가

log4j, log4j2, logback, slf4j 등

여러 라이브러리들이 존재하더라

# log4j

#### - log for java

아파치에서 서비스하는 log4j이다.<br>
속도에 최적화 되어 있고,<br>
로그레벨에 기반하여 필요이상의 레벨에 도달한 로그만 기록하는 방식이며,<br>
멀티쓰레드 환경에서도 안전하지만,

자바 1.9버전에서 제대로 동작하지 않는다는 취약점이 있으며,<br>
[보안취약점](https://www.cvedetails.com/cve/CVE-2019-17571/)도 발견되었다.<br>
궁극적으로 2015년 8월 5일부로, 아파치 재단에서도 log4j의 지원을 종료해서<br>
아파치 재단에서도 log4j 2로 업그레이드 하는것을 안내해준다.<br>
[log4j 1.2 apache 공식문서](http://logging.apache.org/log4j/1.2/)

```xml
<!-- maven -->
<dependency>
  <groupId>log4j</groupId>
  <artifactId>log4j</artifactId>
  <version>1.2.17</version>
</dependency>

<!-- gradle -->
dependencies {
  compile group: 'log4j', name: 'log4j', version: '1.2.17'
}
```

# logback

logback

# log4j2

<br>
log4j의 지원종료.<br>
다른 보안문제나 버전호환등의 문제들을 대체할 2 버전을 출시했다.<br>
[log4j 2 apache 공식문서](http://logging.apache.org/log4j/2.x/index.html)<br><br>
공식문서 첫 문단에<br>
api 분리라고 명시되어있는데 무슨뜻일까...<br>
기존에 log4j를 사용하려면<br>
이렇게 log4j 라이브러리를 다음과 같이 maven, gradle등에 추가해주면 되었다.<br>

```xml
<!-- maven -->
<dependency>
  <groupId>log4j</groupId>
  <artifactId>log4j</artifactId>
  <version>1.2.17</version>
</dependency>

<!-- gradle -->
dependencies {
  compile group: 'log4j', name: 'log4j', version: '1.2.17'
}
```

근데 log4j 2 는 api와 구현체가 분리되었다.

```xml
<!-- maven -->
<dependencies>
  <dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-api</artifactId>
    <version>2.13.1</version>
  </dependency>
  <dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.13.1</version>
  </dependency>
</dependencies>

<!-- gradle -->
dependencies {
  compile group: 'org.apache.logging.log4j', name: 'log4j-api', version: '2.14.1'
  compile group: 'org.apache.logging.log4j', name: 'log4j-core', version: '2.14.1'
}
```

이로서 타 로깅시스템이나 자바버전, 기능상의 호환과
도커, slf4j, mongodb등 다양한 확장버전이 존재한다.

<br><br>
![log4j](http://logging.apache.org/log4j/2.x/images/whichjar-2.x.png)

apache입장에서는<br>
기능확장과 버전, 호환문제를 두 부분에 나누어 관리할 수 있게 된 셈

또한 속도면에서도 빠르다.

![최대처리량 비교 벤치마킹](http://logging.apache.org/log4j/2.x/images/async-throughput-comparison.png "최대처리량 비교 벤치마킹")

###### <center>최대처리량 비교 벤치마킹</center>

<!-- [벤치마킹](http://logging.apache.org/log4j/2.x/performance.html#benchmarks) -->

# slf4j

#### - Simple Logging Façade for Java

로깅방식에 [facade 패턴](https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%82%AC%EB%93%9C_%ED%8C%A8%ED%84%B4)을 적용해  
서로 다른 로깅 구현체간의 코드 변경등을 원활하게 가능하게 해주는 라이브러리  
2015년 지원이 끝난 log4j를 다른 라이브러리로 바꾸고싶다면

기존 dependency를 수정하고,  
로깅이 들어간 모든 코드파일에서  
import했던 라이브러리들을 수정해주는 작업을 거쳐야한다...  
log4j to log4j2의 마이그레이션이라면 가이드가 있고 여러 사례들이 존재한다.  
[log4j to log4j2 migration](https://logging.apache.org/log4j/2.x/manual/migration.html)

모든파일에 손을 대는 것은 ide에서 지원하는 일괄 변경기능으로 어느정도는 가능하지만  
공식문서에도 있듯이 Appenders 등 log4j 1.x 구현 내부 메서드에 접근이라도 해서  
개별 구현을 시도했다면  
어지러운 작업이 될 것이다.

이런 작업들을 돕기 위해 추상화된 라이브러리가 slf4j.  
추상화되어 있다보니 단독으로는 사용이 되지 않고, logging, log4j등 실제 로깅 프레임워크 구현체와 함께 사용된다.

spring boot에서는 기본지원하는 라이브러리로 logging과 slf4j가 제공된다.
<br><br>
참고:
[https://stackoverflow.com/questions/41498021/is-it-worth-to-use-slf4j-with-log4j2](https://stackoverflow.com/questions/41498021/is-it-worth-to-use-slf4j-with-log4j2)
