//console.log(sum(1,2,3)) Hoisting 불가능
const sum = new Function('a','b','c', 'return a + b + c')
console.log(sum(1,2,3))
//function & new Function 차이점
//function은 사용시 마다 초기화 하는 반면 new Function은 사용할 때 마다 새로 만듬