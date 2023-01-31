// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

const person = {
    name: 'Lee'
};

// 프로퍼티 어트리뷰트에 간접 접근
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// 프로퍼티 동적 생성
person.age = 15;
// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(person));
