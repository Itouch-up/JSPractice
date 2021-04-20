global.a=0

{
    const a=1
    const test = new Function('return a')//전역변수 a

    console.log(test())
}
{
    const a=2
    const test = function(){
        return a//지역변수 a
    }
    console.log(test())
}