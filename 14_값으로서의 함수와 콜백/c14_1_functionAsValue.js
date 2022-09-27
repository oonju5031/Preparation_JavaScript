// JavaScript에서는 함수도 하나의 객체, 즉 일종의 값이다.
// 타 언어와의 차이점은 함수 자체로 값이 될 수 있다는 것이다.

// 다음 함수 a는 변수 a에 담겨진 값이다.
function a() {}  // same as var a = function() {};

// 함수는 객체의 값(value)으로 포함될 수 있으며, 이렇게 객체의 속성 값으로 담겨진 함수를 메소드(method)라 한다.

a = {
    b : function() {
        // key인 b는 변수와 같은 역할을 수행한다. 이를 속성(property)이라 한다.
        // value인 function()은 method에 해당한다.
    }
};

// 함수가 값이라는 것은 다른 함수의 인자로 전달될 수도 있음을 의미한다.
function cal(func, num) {
    return func(num);  // 첫 인자로 함수를 호출하는 동시에 두 번째 인자를 매개변수로 전달한다.
}

function increase(num) {
    return num + 1;
}

function decrease(num) {
    return num - 1;
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));

// 또한 함수는 다른 함수의 반환 값으로도 사용할 수 있다.
function cal2(mode) {
    var funcs = {
        'plus' : function(left, right) {
            return left + right;
        },
        'minus' : function(left, right) {
            return left - right;
        }
    }
    return funcs[mode];
}

console.log(cal2('plus')(2, 1));  // funcs['plus'](2, 1) == function(2, 1)
console.log(cal2('minus')(2, 1));

// 함수를 배열의 값으로도 사용할 수 있다.
var process = [
    function (input) {return input + 10;},
    function (input) {return input * input;},
    function (input) {return input / 2;}
];

var input = 1;

for (var i = 0; i < process.length; i++) {
    input = process[i](input);
}

console.log(input);

// 이와 같이 변수, 매개변수, 반환값으로 사용될 수 있는 데이터를
// first-class citizen, 또는 first-class object, 또는 first-class value라 한다.