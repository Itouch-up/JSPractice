function hello(){
    console.log("Hello JS World")
}
hello()

function hello2(name){
    console.log(`Welcome JS World,${name}`)
}
hello2("Mark")
function hello3(name){
    return `Hello ${name}`
}
console.log(hello3("John"))

const hello4 = function(name){
    console.log(`Hello ${name}`)
}
hello4('Xiao')
const hello5=function(name){
    return `Hello ${name}`
}
console.log(hello5('QiQi'))

hello6('Mario')
function hello6(name){
    console.log(`Hello ${name}`)
}

//hello7('Diluc')<--선 호출(호이스팅(Hoisting)) 불가능
var hello7=function(name){
    console.log(`Hello ${name}`)
}
hello7('Diluc')
//hello8()<--선 호출(호이스팅(Hoisting)) 불가능
const hello8=function(){
    console.log("Hello")
}
hello8()