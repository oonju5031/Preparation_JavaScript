o1 = {val1: 1, val2: 2, val3: 3};
o2 = {v1: 10, v2: 50, v3: 100, v4: 25};

function sum() {
    var _sum = 0;
    for (var name in this) {  // this는 함수를 호출할 때 결정된다. 예를 들어 var this = o1;
        _sum += this[name];
    }
    return _sum;
}

// c17_1에서 apply메소드에 null 대신 객체 o1, o2를 입력하였다.
console.log(sum.apply(o1));  // 6
console.log(sum.apply(o2));  // 185