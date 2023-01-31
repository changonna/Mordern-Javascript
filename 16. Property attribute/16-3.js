// 16.3 Data Property and Accessor Property
const person = {
    // 1. Data Property
    firstName: 'changon',
    lastName: 'Na',

    // 2. Accessor Property
    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'sohyun Lee';
console.log(person)
// 접근자 프로퍼티 fullName을 호출하면 getter 함수가 호출된다.
console.log(person.fullName);


// firstName은 데이터 프로퍼티.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티.
// 데이터 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);


// 일반 객체의 __proto__는 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// 함수 객체의 prototype은 데이터 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));