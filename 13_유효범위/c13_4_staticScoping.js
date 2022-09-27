// JavaScript는 함수가 선언된 시점에서의 유효범위를 갖는다.
// 이를 정적 유효범위(Static Scoping)또는 렉시컬(Lexical Scoping)이라 한다.

var i = 5;  // 전역변수

function first() {
    var i = 10;  // 지역변수
    second();
}

function second() {
    console.log(i);
}

// 함수 second가 정의되는 시점에 지역변수가 없는데, 이 경우 함수 first의 i가 아닌 전역변수 i를 사용한다.
// 이처럼 함수가 사용될 때가 아닌 정의될 때를 기준으로 유효범위를 지정하는 방식을 정적 유효범위라 한다.