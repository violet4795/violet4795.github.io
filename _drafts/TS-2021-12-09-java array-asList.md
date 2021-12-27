---
title: "array to list - java array.asList"
excerpt: ""

categories:
  - trouble shooting
tags:
  - java 
last_modified_at: #2021-12-09T10:01:00
---

몇달뒤 오픈하는 프로젝트에 급하게 투입되어 

인수인계도 없이 프로젝트를 진행중에 화면개발을 받았다.

crud정도의 개발이 되어주면 되는데, 

PL님의 의견으로 어느정도 뼈대가 개발이 되어있어서 잘되는거니까 

그래프도식정도만 남기면 된댔는데,

저장도 제대로 안되고 조회도 안된다.

아마 As-is코드를 그대로 갖다 놓은듯 한데,

대부분 수정을 끝마쳤으나, Arrays.asList()가 예상대로 동작이 되지않는 현상이 있었다.

list a = Array.asList( new int[] {1,2,3} ) 의 결과물

``` java 

// 예상 결과물
a.get(0) // 1
a.get(1) // 2
a.get(2) // 3

// 실제 결과물
a.get(0) // [1,2,3]
```
1,2,3 의 list를 기대했는데

아니었다.

0번째값에 int[]이 들어가는 형태였다.

```java 

```

primitive type의 배열을 변환할때 wrapper객체가 없어서 

stream을 통한 boxed, 혹은 반복문을 통해 일일이 add해줘야한다.




<!-- // int -> List
List<Integer> intList
= Arrays.stream(arr)
.boxed()
.collect(Collectors.toList());
// List 출력
System.out.println(intList.size()); // 3
System.out.println(intList); // [1, 2, 3]
}
}


출처: https://hianna.tistory.com/552 [어제 오늘 내일]
 -->
