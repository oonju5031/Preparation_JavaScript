// JavaScript는 함수 안에 함수를 선언할 수 있다.
// 이 때 전자를 외부함수(Outter Function), 후자를 내부함수(Inner Function)라 한다.

// 이 때 내부함수는 외부함수의 지역변수에 접근할 수 있다.

function outter() {
    var title = 'Hello world!';  // 외부함수의 지역변수
    function inner() {
        console.log(title);  // 내부함수가 외부함수의 지역변수에 접근함
    }
    inner();
}
outter();