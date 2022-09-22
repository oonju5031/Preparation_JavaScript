// 정규표현식에서 그룹을 사용하는 방식을 Capture라 한다.

// ()는 그룹을 의미한다. 해당 패턴은 2개의 그룹을 가진다.
// \w는 word(A~Z, a~z, 0~9)를 의미한다.
// +는 수량자로, 하나 이상을 의미한다. 즉 하나 이상의 word를 검출한다.
// \s는 공백을 의미한다.
var pattern = /(\w+)\s(\w+)/;

// 두 번째 그룹($2)과 첫 번째 그룹($1)을 바꾼다.
var result = 'Hello World'.replace(pattern, '$2, $1');

console.log(result);

/*
정규표현식과 관련된 몇 가지 보조 기능
https://regexper.com/ 정규표현식 시각화
https://regexr.com/ 정규표현식 빌더
*/