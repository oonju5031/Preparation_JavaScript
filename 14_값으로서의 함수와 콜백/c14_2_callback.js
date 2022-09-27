// 함수를 값으로 이용할 수 있다는 특성을 이용하여 함수의 인자로 함수를 전달할 수 있는데,
// 이렇게 값으로 전달된 함수는 호출될 수 있기 때문에 함수의 동작을 유연하게 수정할 수 있다.

// 객체인 numbers를 내장 메소드(built-in method)인 sort()를 통해 정렬한다.
var numbers = [12, 4, 9, 14, 100, 213];
console.log(numbers.sort());  // 100, 12, 14, 213, 4, 9: 수의 크기순이 아닌 문자의 크기순으로 정렬한다.

// 이 때 sort함수를 사용자 정의 메소드로 응용해 보자.
// sort함수는 인자 하나를 입력하면 원소들 간의 우선순위를 옵션으로 사용할 수 있다.

// 각 인자를 비교하는 과정이 출력되는 함수
var sortTest = function(a, b) {
    console.log(a, b);
}

console.log(numbers.sort(sortTest));

// 각 인자를 비교하여 값이 작은 순서대로 정렬하는 Callback 함수
var sortByNum = function(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

console.log(numbers.sort(sortByNum));

// 양수/음수 여부만 따지면 되기에 이 콜백함수를 다음과 같이 간략화할 수 있다.
var sortByNum2 = function(a, b) {
    return a - b;
}

console.log(numbers.sort(sortByNum2));