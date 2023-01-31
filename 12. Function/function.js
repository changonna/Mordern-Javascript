// 12.5.2 인수 확인
function add(x, y) {
    console.log(arguments); // arguments에 3번째 인수 10 저장
    return x + y;
}

add(2, 5, 10);



// 매개변수 초기화
function add(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());





// 12.6 참조에 의한 전달과 외부 상태의 변경
changeVal = (primitive, obj) => {
    primitive += 100;
    obj.name = 'Kim';
}

let num = 100;
let person = { name : 'Lee' };

console.log(num);
console.log(person);

changeVal(num, person); // 원시 값 num은 값 자체가 복사 / 객체 person은 참조 값이 복사

console.log(num);
console.log(person); // 객체는 변경됨




// 12.7 다양한 함수의 형태

// 12.7.1 즉시 실행 함수
(function() {
    const a = 3;
    const b = 5;
    return a + b;
}());




// 12.7.5 순수함수, 비순수함수
let count = 0;

// 순수함수
increase = (n) => {
    return ++n;
}
count = increase(count);
console.log(count);
count = increase(count);
console.log(count);

// 비순수함수
let count2 = 0;
increase2 = () => {
    return ++count2;
}
increase2(count2);
console.log(count2);
increase2(count2);
console.log(count2);