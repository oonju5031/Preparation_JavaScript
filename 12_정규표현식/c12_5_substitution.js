var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;

var content = '깃허브 : https://github.com/oonju5031 입니다.\n네이버 : http://naver.com 입니다. ';

// content 내부의 url을 검출하여 링크 태그를 삽입하는 함수이다.
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);