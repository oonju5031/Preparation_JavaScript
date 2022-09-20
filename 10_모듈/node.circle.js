/*
호스트 환경에 따라 서로 다른 모듈화 방법을 지원함을 이해하기 위한 예제이다.
c10_1_module.html의 경우 html의 모듈화를 이용하였지만,
해당 예제에선 Node.js의 모듈화를 간략하게 설명한다.
*/

// node.circle.js는 로드될 대상이다.

const PI = Math.PI;

exports.area = function(r) {
    return PI * r * r;
};

exports.circumference = function(r) {
    return 2 * PI * r;
};