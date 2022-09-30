function factory_movie(title) {
    return {
        get_title : function() {
            return title;  // 외부함수 factory_movie의 매개변수 title을 내부함수에서 접근하여 반환
        },
        set_title : function(_title) {
            title = _title;
        }
    }
}

// ghost와 matrix엔 두 개의 익명함수가 값(value)로 존재하는 일련의 객체가 반환된다.
// 즉 get_title:function(), set_title:function(_title)이 반환된다.
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title());  // Ghost in the shell
console.log(matrix.get_title());  // Matrix

// set_title 메소드를 통해 외부함수의 지역변수(임시변수) title을 변경할 수 있다.
ghost.set_title('공각기동대');

console.log(ghost.get_title());  // 공각기동대
console.log(matrix.get_title());  // Matrix

// 상기한 내용은 closure를 이용해 matrix의 값을 그대로 둔 채 ghost의 값을 변경시켰음을 시사한다.
// 이 때 get_title(), set_title()은 public한 메소드이며, title은 해당 메소드를 통해서만 접근할 수 있는 임시변수이다.
// 이 임시변수는 private한 변수와 유사한 기능을 가진다.

/*
위 내용을 다음과 같이 바꾸면 예상하지 못한 값이 입력되는 것을 막을 수 있다.
예를 들어 String만을 입력값을 바꾸고 싶을 때, set_title 메소드를 다음과 같이 수정하면 된다.
set_title: function(_title) {
    if (typeof _title === 'string') {
        title = _title
    } else {
        console.log('제목은 문자열이어야 합니다.');
    }
}

이 경우 set_title의 인자로 정수를 넣은 경우의 예외를 제어할 수 있다.
이는 string값만을 받는 set_title 함수로만 변수 title에 입력을 하도록 설정하고,
get_title 함수로만 이를 반환하도록 한다.
*/