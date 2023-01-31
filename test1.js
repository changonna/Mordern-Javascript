// ES6의 함수 매개변수의 기본값 설정

const getStringLength = (str = '') => {
    return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2



// 9.4.2 옵셔널 체이닝 연산자    ?.
const elem = undefined;
// elem이 null 또는 undefined이면 undefined를 반환하고,
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
// const value = elem?.value;

// elem이 Falsy 값이면 elem으로 평가
// elem이 Truthy 값이면 elem.value로 평가된다.
const value = elem && elem.value;
console.log(value);





