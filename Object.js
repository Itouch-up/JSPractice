function A(){}

const a = new A()

console.log(a,typeof a)
console.log(A())

function B(name,age){
    console.log(name,age)
}
const b = new B()
const C = new B('Diluc',27)
console.log(B())
