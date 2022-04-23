# Variables

변수, named storage. `let` keyword로 선언(*declare*)하고 assignment operator `=`으로 값을 할당할 수 있다. 한 줄에 여러 변수를 선언할 수 있지만 가독성을 위해 한 줄에 하나의 변수만 선언하도록 하자.

`var` 키워드는 `let`과 거의 비슷하다. 하지만 오래된 방식으로 미묘한 차이가 있다. 6-4에서 자세히 알아보자.

## Variable naming

자바스크립트의 변수명에는 문자, 숫자, 그리고 `$`, `_` 기호가 들어갈 수 있고 숫자로 시작해서는 안되고 예약어(*reserved name*)도 제약이 있다. 그리고 `camelCase`를 사용하는 것이 일반적이다. 다음 명명은 유효하다.

```javascript
let $ = 1;
let _ = 2;
```

`use strict`를 사용하지 않고는 단순 할당으로 (e.g. num = 5;) 변수를 사용할 수는 있다.

## Constants

상수는 `const`를 사용하여 선언한다.

## Uppercase constants

기억하기 어려운 값, hard-coded된 aliase의 상수 명명은 대게 대문자와 밑줄을 사용한다.

## Name things right

변수명은 clean하고, obvious meaning을 가지고 그것이 가지고 있는 data를 설명할 수 있게 최대한 descriptive하고 concise하게 작성되어야 한다.

변수를 reuse 하는 것보다 create, 추가로 다시 만드는 것이 좋은 습관이다.