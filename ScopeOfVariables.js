//const, let의 범위 = 블록 스코프
//{}: 블록
/*
{
    const name = 'Mark
    console.log(name)
}

console.log(name) == error
*/
/*
let age = 37
{
    console.log(age) == success!
}
*/
//function
/* 
function hello(){
    const name='Mark'
    console.log(name)
}
*/
//var 유효범위 
//function(){} 함수
/*
var 함수 스코프

var a = 0
(function(){
    a++
    console.log(a)
})()
console.log(a)

(function(){
    var b=0
    console.log(b)
})()
b++
console.log(b)
*/
//블록 스코프
/*
var c=0
{
    c++
    console.log(c)
} 
*/