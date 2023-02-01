// 16-4. 프로퍼티 정의

let person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'Changon',
    writale: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Na'
    // 누락시키면 undefined, false가 기본값이다.
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// [[Enumerable]]이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person));

// [[Writable]]의 값이 false인 경우
// 해당 프로퍼티는 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = 'Kim';
console.log(person.lastName); // 'Na'

// [[Configurable]]의 값이 false 인 경우 해당 프로퍼티를 삭제할 수 없다.
delete person.lastName;
console.log(person.lastName); // 'Na' 삭제되지 않는다.

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'lastName', { enumerable: true });
// Uncaught TypeError: Cannot redefined property: lastName


// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

person.fullName = 'Sohyun Lee'; // 왜 안바뀌지?
console.log('Sohyun Lee', person);






// Object.defineProperties : 여러개의 프로퍼티를 한번에 정의한다.
// ex 16-09
person = {};

console.log(person);

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'Changon',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Na',
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티
    fullName: {
        // getter
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'Sohyun Lee';
console.log(person);