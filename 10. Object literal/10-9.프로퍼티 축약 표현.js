/* 10.9 ES6에서 추가된 객체 리터럴의 확장 기능 */
/* 10.9.1 프로퍼티 축약 표현 */
/* [예제 10-19] */
// 변수 이름과 프로퍼티 키가 동일한 이름일 때, 프로퍼티 키를 생략할 수 있다.
var x = 1, y = 2;
const obj = {x, y};

console.log(obj);


/* 10.9.2 계산된 프로퍼티 이름 */
/* [예제 10-22] */
// 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.

// 계산된 프로퍼티 이름
const prefix = 'prop';
let i = 0;

const object = { // 리터럴 내부
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
}

console.log(object);


/* 10.9.3 메서드 축약 표현 */
/* [예제 10-24] */
const obj1 = {
    name: 'Lee',

    // ES5
    sayHi: function() {
        console.log('Hi! ' + this.name);
    },

    // ES6 : function 키워드 생략
    sayBye() {
        console.log(`Bye! ${this.name}`);
    }
};

obj1.sayHi();
obj1.sayBye();


