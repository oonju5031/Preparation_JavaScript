// 유효범위(Scope)는 변수의 수명을 의미한다.

// 전역변수(Global variable)는 함수 외부에 선언된 변수로, 코드 어디에서든 접근할 수 있다.
var globalVariable = 'global variable';

function globalScope() {
    console.log(globalVariable);
}

globalScope();

// 지역변수(Local variable)는 함수 내부에 선언된 변수로, 해당 함수에서만 접근할 수 있다.
function localScope() {
    var localVariable = 'local variable';
    console.log(localVariable);
}

localScope();

// 전역변수와 지역변수가 동시에 있는 경우, 함수 실행 시 지역변수가 우선권을 가진다.
// 즉 함수는 지역변수를 우선하여 탐색하고, 없는 경우 전역변수를 탐색한다.
var scope = 'global'; 
function scopeTest() {
    var scope = 'local';
    console.log(scope);
}

scopeTest();

// 다음과 같은 상황에 주의: 동명의 전역변수가 있는 경우 지역변수의 선언 시 type을 명시하여야 한다.
var wScope = 'global';
function wScopeTest() {
    wScope = 'local';  // var을 붙이지 않았기 때문에 새 변수의 선언이 아닌, 기존에 있는 전역변수 wScope의 값을 변경하는 작업을 한다.
}

wScopeTest();
console.log(wScope);