# The modern mode, "use strict";

2009년 ECMAScript5(ES5)이 등장하며 하위 호환성 문제로 대부분의 변경사항은 기본 모드에서는 활성화되지 않도록 설계했다. 대신 `use strict` directive를 사용해서 엄격 모드 활성화 시 변경사항 또한 활성화된다.

`use strict` directive는 스크립트 최상단에 위치하고, 함수 본문 맨 앞에 올 수도 있다. 예외적으로 지시어 위에 주석만 사용할 수 있다.

## Browser console

```javascript
"use strict"; // <Shift + Enter for a newline>
// ...
// <Enter to run>
```

오래된 브라우저에서는 동작하지 않기 떄문에 다음과 같이 wrapper로 감싸면 된다.

```javascript
(function() {
    "use strict";
    // ...
})()
```

## Should we "use strict"?

모던 js에서 제공하는 `class`, 그리고 `module`을 사용하면 자동적으로 엄격 모드가 활성화되기 때문에 생략할 수 있다. 쓰면 개발자의 삶이 질이 높아진다는데 ...안 써봐서 잘 모르겠다. 심심하니까 일단 붙여보자.
