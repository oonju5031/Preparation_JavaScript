// 외부함수의 실행이 종료되어 소멸한 이후에도 내부함수는 외부함수의 변수에 접근할 수 있다.
// 이러한 일련의 메커니즘을 클로저라 한다.

function outter() {
    var title = 'Hello world!';
    // 내부함수를 반환하는 시점에서 외부함수의 실행은 종료된다.
    return function() {  // 해당 익명함수는 내부함수이다.
        console.log(title);  // 외부함수가 종료되었더라도 내부함수는 외부함수의 변수에 접근할 수 있다.
    }
}
inner = outter();
inner();