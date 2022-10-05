// 매개변수의 개수와 관련하여 다음과 같은 두 가지 메소드가 있다.
// (함수명).length: 함수로 전달된 실제 인자의 수
// argunemts.length: 함수에 정의된 매개변수의 수

function zeroParameter() {
    console.log(
        'zeroParameter.length', zeroParameter.length,
        'arguments.length', arguments.length
    );
}

zeroParameter(); // zeroParameter.length 0 argument.length 0

function oneParameter(arg1) {
    console.log(
        'oneParameter.length', oneParameter.length,
        'arguments.length', arguments.length
    );
}

// 매개변수가 하나인데 인자를 두 개 입력한 경우: 초과되는 값은 버려진다.
// 이 때 oneParameter.length: 함수가 정의한 매개변수의 개수인 1
// arguments.length: 실제로 전달된 인자의 개수인 2
oneParameter('val1', 'val2');