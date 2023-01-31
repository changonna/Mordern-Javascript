// 16.1 내부 슬롯과 내부 메소드

// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다.
const person = {
    name: 'Lee'
};

// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다.
// 내부 슬롯은 원칙적으로 직접 접근할 수 없지만 [[Prototype]] 내부 슬롯의 경우 __proto__를 통해 간접적으로 접근할 수 있다.
console.log(person.__proto__);