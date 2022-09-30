// 다음 코드의 배열 arr은 각 원소로 '현재 i의 값을 리턴하라'는 기능의 '함수'가 저장된다.
// 함수 종료 시 지역변수 i의 값은 5기 때문에, 이를 실행하는 경우 정수 5가 5회 출력된다.
var arr = [];  // 첫 for문의 익명함수가 원소로 저장된다.

for (var i = 0; i < 5; i++) {
    arr[i] = function() {
        return i;
    }
}

for (var index in arr) {
    console.log(arr[index]());
}
// ⑤ 5 : 5가 5회 출력됨

// 이를 다음과 같이 수정하여 1부터 5까지의 값을 출력하는 함수로 바꿀 수 있다.
// 다음 코드는 배열 arr2의 각 원소로 0, 1, 2, 3, 4의 '값'을 저장한다.
// 따라서 이를 실행하는 경우 0부터 4까지의 정수가 출력된다.
var arr2 = [];  // 동일하게 첫 for문의 익명함수가 원소로 저장된다.

for (var j = 0; j < 5; j++) {
    arr2[j] = function(id) {  // 외부함수와 외부함수의 지역변수 id
        return function() {  // 내부함수
            return id;
        }
    }(j);  // j를 인자로 외부함수를 바로 실행한다.
}

for (var index in arr2) {
    console.log(arr2[index]());
}