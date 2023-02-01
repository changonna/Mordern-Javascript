// 16.5 객체 변경 방지

// 16.5.1 
// Object.preventExtensions : 객체 확장 금지
// - 프로퍼티 추가만 금지.

let person = {
    name: 'Na'
}

// 확장 금지 확인
console.log(Object.isExtensible(person)); // true

// 확장 금지 설정
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // false

// 객체 프로퍼티 추가 X
person.age = 28;
console.log(person); // age 추가되지 않음.

// 삭제 가능 O
delete person.name;
console.log(person); // {}


// 16.5.2
// Object.seal : 객체 밀봉
// - 프로퍼티 추가, 삭제, 재정의 금지.

person = {
    name: 'Na'
}

// 객체 밀봉 확인
console.log(Object.isSealed(person)); // false

// 객체 밀봉
Object.seal(person);
console.log(Object.isSealed(person)); // true

// 프로퍼티 추가 (X)
person.age = 28;
console.log(person);

// 삭제 (x)
delete person.name;
console.log(person);

// 프로퍼티 값 갱신은 가능 (O)
person.name = 'Lee';
console.log(person);

// 프로퍼티 어트리뷰트 재정의 (X)
// Object.defineProperty(person, 'name', {
//     configurable: true
// });


// 16.5.3
// Object.freeze : 객체 동결
// - 읽기만 가능
person = {
    name: 'Na'
}

// 객체 동결 확인
console.log(Object.isFrozen(person)); // false

// 객체 동결
Object.freeze(person);
console.log(Object.isFrozen(person)); // true

console.log(Object.getOwnPropertyDescriptors(person));
// --> 동결된 객체는 writable : false, configurable: false 이다.

// 프로퍼티 추가 (X)
person.age = 28;
console.log(person);

// 프로퍼티 삭제 (X)
delete person.name;
console.log(person);

// 프로퍼티 값 변경 (X)
person.name = 'Lee';
console.log(person);

// 프로퍼티 재정의 (X)
// Object.defineProperty(person, 'name', {
//     configurable: true
// }); // --> error
console.log(person);


// 16.5.4 불변 객체
person = {
    name: 'Na',
    address: {
        city: 'Anyang'
    }
}

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결한다
console.log(Object.isFrozen(person)); // true

// 중첩 객체까지 동결하지 못한다.
console.log(Object.isFrozen(person.address)); // false

// 중첩 객체 값 변경 가능
person.address.city = 'Seoul';
console.log(person);


// 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면
// 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.
function deepFreeze(target) {
    if(target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

person = {
    name: 'Lee',
    address: {
        city: 'Anyang'
    }
}

// 깊은 객체 동결
deepFreeze(person);

console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // true

person.address.city = 'Seoul';
console.log(person); // 'Anyang'