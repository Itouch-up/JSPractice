//override
class Parent{
  name = 'Lee'
  hello(){
    console.log('hello',this.name)
  }
}
class Child extends Parent{
  age = 37
  hello(){
    console.log('hello',this.name,this.age)
  }
}

const p = new Parent2()
const c = new Child2()

console.log(p,c)
c.hello()
c.name="Anna"
c.hello()