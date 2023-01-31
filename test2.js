const o = { x : {y : 1} };

// 얕은 복사 = 객체를 할당한 변수에 다른 변수를 할당하는 것 
const c1 = {...o};
console.log(c1 === o); // false
console.log(o.x === c1.x); // true
console.log(o.y === c1.y); // true

const _ = require('lodash');
// 깊은 복사 = 원시 값을 할당한 변수를 다른 변수에 할당하는 것
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(o.x === c2.x); // false
console.log(o.y === c2.y); // true