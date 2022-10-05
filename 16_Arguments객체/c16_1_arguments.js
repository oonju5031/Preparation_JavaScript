/*
매개변수(parameter)와 인자(argument)의 구분
다음과 같은 코드를 예시로 든다.

function a(arg) {

}
a(1);

이 때 arg가 함수의 매개변수이며, 전달하는 값인 1이 인자에 해당한다.
*/

/*
argument는 객체의 일종으로, 변수에 담긴 유사 배열이다.
해당 배열에는 함수를 호출할 때 입력한 인자가 저장된다.

JavaScript에선 전달된 인자와 매개변수의 개수가 서로 같지 않아도 된다.
이 때 매개변수의 개수가 더 많을 경우 미정된 값은 undefined값을 가지며, 반대의 경우 초과된 인자는 무시된다.
*/

function sum() {
    var _sum = 0;
    for (var i = 0; i < arguments.length; i++) {  // arguments.length = 4
        console.log(i + ': ' + arguments[i]);
        _sum += arguments[i];
    }
    return _sum;
}
console.log('result: ' + sum(1, 2, 3, 4));  // sum은 임의의 개수인 인자에 대해 정상적으로 동작한다.