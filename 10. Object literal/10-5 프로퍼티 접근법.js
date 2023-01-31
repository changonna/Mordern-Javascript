const circle = {
    radius : 5, 
    getDiameter : function() {
        return 2 * this.radius;
    }
}

// console.log(circle.getDiameter());



// 10.5 프로퍼티 접근법
// 1. 마침표 표기법
console.log(`circle.radius : ${circle.radius}`);

// 2. 대괄호 표기법
console.log(`circle[radius] : ${circle['radius']}`);