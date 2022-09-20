// 패턴을 만들 때 옵션을 설정할 수 있다. 옵션에 따라 검출되는 데이터가 달라진다.

// i 옵션이 있는 경우 대소문자를 구분하지 않고 리턴한다.
var i1 = /a/;
var i2 = /a/i;  // i를 추가

console.log('ABcdE'.match(i1));  // null
console.log('ABcdE'.match(i2));  // 대문자 A가 검출된다.

// g(global) 옵션이 있는 경우 검색된 모든 결과를 리턴한다.
var g1 = /a/;
var g2 = /a/g;

console.log('abcdea'.match(g1));  // a
console.log('abcdea'.match(g2));  // a, a