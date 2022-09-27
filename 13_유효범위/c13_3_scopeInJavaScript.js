// 다수의 언어들이 블록(대체로 {})에 대해서도 지역변수를 제공하는 것과 다르게,
// JavaScript는 함수에 대한 지역변수만을 제공한다.

for (var i = 0; i < 1; i++) {
    var name = 'Be careful.';
}

console.log(name);

// 타 언어의 경우 변수 name은 블록 for문의 지역변수가 된다. 따라서 for문 외부에서 호출할 수 없다.
// 하지만 JavaScript에선 블록에 대해 지역변수를 제공하지 않기 때문에,
// name은 전역변수가 되고 for문 외부에서도 호출할 수 있다.