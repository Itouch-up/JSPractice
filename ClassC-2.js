//static
class A{
  static age = 37
  static hello(){
    console.log(A.age)
  }
}
console.log(A,A.age)
A.hello()
class B{
  age = 37
  static hello(){
    console.log(this.age)
  }
}
console.log(B,B.age)
B.hello
new B().hello()