# Data types

값에는 그에 대응하는 자료형이 항상 있다. 자바스크립에는 8가지 기본 자료형이 있는데, 변수에는 어떠한 자료형도 올 수 있고 자료형도 각 시점마다 바뀔 수 있다. 이러한 언어를 *dynamically typed language*라고 한다.

## Number

Number type은 정수와 실수, 그리고 *special numeric values*를 포함하다.

장점이 있다면 자바스크립트에서 수학은 안전하다. divide-by-zero 문제라든지 일반적인 문자열을 숫자로 취급해서 연산을 진행해도 스크립트가 뒤지진(?) 않기 떄문이다. 기껏해야 `NaN`을 던질 것이다.

NaN (not a number)은 부가적인 연산이 들어가도 NaN이다, 예외적으로 `NaN ** 0`은 `1`이다.

## BigInt

자바스크립트에서 Number의 정수 표현은 2^53 - 1 (9007 1992 5474 0991) 까지가 끝이다. BigInt는 길이에 상관없이 정수를 표현할 수 있고 정수 리터럴 끝에 `n`을 붙이면 만들 수 있다.

```javascript
const bigInt = 1234567890123456789012345678901234567890n;
```

참고로 호환성 이슈가 있어서 IE에서는 BigInt를 지원하지 않을 수 있다.

## String

문자열은 quotes(따옴표)로 감싸서 만들 수 있다. quotes는 3종류가 있다.

1. Double quotes : "Hello"
2. Single quotes : 'Hello'
3. Backticks : \`Hello\`

자바스크립트에서 큰따옴표와 작은따옴표는 기능적으로 차이가 없다. 역 따옴표 문자열 내부에서는 `${...}`로 변수나 표현식을 중간에 삽입할 수 있다.

자바스크립트에서 글자(character) type은 없다.

## Boolean (logical type)

`ture` 그리고 `false`. 이상.

## The "null" value

자바스크립트의 `null`은 다른 언어와 같이 '존재하지 않는 객체에 대한 참조'나 null pointer를 의미하지 않는다. 

그냥 nothing, empty, unknown value를 나타내는 특별한 값이다.

`null`같은 오직 `null` 값만 포함하는 별도의 자료형이다.

## The "undefined" value

변수가 선언되었지만 할당되지 않았을 떄, 그 값은 자동적으로 `undefined`이다. 

명시적으로 `undefined`를 할당할 수는 있지만 권장하지 않는다. 대신 빈 값이다, 알 수 없음을 나타내려면 `null`을 주도록 하자.

## Objects and Symbols

다른 모든 타입들은 "primitive"하다. 그것이 객체가 갖는 다른 자료형과의 차이점이고, `symbol`은 객체의 unique identifier를 만들 떄 쓰인다는데 ... 나중에 알아보도록 하자.

## The typeof operator

피연산자 또는 인수(argument)의 자료형을 문자열로 반환한다. 자료형에 따라 다르게 처리한다든지 자료형이 무엇인지 빠르게 확인할 수 있다.

1. operator : typeof x
2. function : typeof(x)

연산자이지, 함수는 아님을 명확히 하자. `typeof` 연산자는 두 가지 형태의 문법 다 지원한다. 아래 예시는 compatibility, 하위 호환성을 유지하기 위해 남겨진 오류(error)이다.

```javascript
typeof null // "object"
typeof alert // "function"
```

`null`은 `null`이다. ...그렇다.

"function"이라는 type은 없다. 형식적으로 typeof가 잘못 동작하고 있지만 실무에서는 유용하게 쓸 떄도 있다.
