/*
정규표현식을 통한 작업은 크게 세 가지가 있다.
1. 추출: 문자열 중 원하는 내용만을 반환하는 것
2. 테스트: 검색된 정보가 문자열 내에 있는지 확인하는 것
3. 치환: 검색된 정보를 다른 내용으로 바꾸는 것
*/

var pattern1 = /a/;
var pattern2 = /a./;

console.log(pattern1.exec('abcdef'));  // a
console.log(pattern1.exec('bcdefg'));  // a가 없으므로 null을 리턴한다.
console.log(pattern2.exec('abcdef'));  // ab: 임의의 문자 b까지 리턴한다.

// Regexp.test() 메소드는 대상에 원하는 패턴이 있는지를 찾아 true/false로 리턴한다.
console.log(pattern1.test('abcdef'));  // true
console.log(pattern1.test('bcdefg'));  // false

// String.match() 메소드는 exec 메소드와 유사하나 String과 Regexp의 위치가 바뀐다.
console.log('abcdef'.match(pattern1));

// String.replace() 메소드는 원하는 패턴을 찾아 다른 내용으로 치환한 후 이를 반환한다.
console.log('abcdef'.replace(pattern1, 'z'));

