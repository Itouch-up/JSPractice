let whatever = 'Mark'

whatever = 37;

whatever = true;
//js datatype
/*
기본 타입
Boolean
NUll
Undefined
Number
String
Symbol(EcmaScript 6 에 추가)
객체
*/
//Boolean
const isTrue = true
const isFalse = false

console.log(isTrue,typeof isTrue)
console.log(isFalse,typeof isFalse)

const a = new Boolean(false)
console.log(a,typeof a)
if(a){
    console.log('false?')
}
const b = Boolean(false);
console.log(b,typeof b)
if(b){
    console.log('false?')
}
//Null
const c = null
console.log(c,typeof c)
let d
console.log(d,typeof d)