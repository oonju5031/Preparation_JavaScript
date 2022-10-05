/*
JavaScript에서의 함수는 객체의 일종이다.
객체는 속성(property)을 가지는데, 속성의 값(value)이 함수인 경우를 메소드(method)라 한다.

JavaScript에서의 함수는 Function이라는 객체의 인스턴스에 해당하며,
따라서 객체 Function이 가지는 메소드를 상속받아 사용할 수 있다.

Function.apply와 Function.call은 함수를 호출하는 또 다른 방법을 제공하는 메소드이다.
*/

function sum(arg1, arg2) {
    return arg1 + arg2;
}

// 함수를 호출하는 기본적인 방법
console.log(sum(3, 4));

// Function.apply 메소드를 이용하여 함수를 호출하는 방법
console.log(sum.apply(null, [4, 5]));