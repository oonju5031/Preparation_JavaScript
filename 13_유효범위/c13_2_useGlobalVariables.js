// 이하 코드는 전역변수에서 충돌이 일어나지 않도록 하는 응용이다.

var myapp = {}  // ;를 안 붙여도 되는 이유?

myapp.calculator = {
    'left' : null,
    'right' : null
}

myapp.coordinate = {
    'left' : null,
    'right' : null
}

myapp.calculator.left = 10;
myapp.calculator.right = 20;

function sum() {
    return myapp.calculator.left + myapp.calculator.right;
}

console.log(sum());

// 이를 지역변수로 바꾸고 싶다면 다음과 같이 익명함수를 사용하면 된다.
(function () {
    var myapp = {}

    myapp.calculator = {
        'left': null,
        'right': null
    }

    myapp.coordinate = {
        'left': null,
        'right': null
    }

    myapp.calculator.left = 10;
    myapp.calculator.right = 20;

    function sum() {
        return myapp.calculator.left + myapp.calculator.right;
    }

    console.log(sum());

}())  // ()를 통해 바로 실행한다.