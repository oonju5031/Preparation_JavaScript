// node.demo.js는 로드를 하는 주체이다.

// html의 <script type = "text/javascript" scr = "greeting.js"></script>와 다른
// Node.js의 모듈화 기법
var circle = require('./node.circle.js');

console.log('The area of a circle of radius 4 is ' + circle.area(4));

console.log('The circumference of a circle of radius 5 is ' + circle.circumference(5));