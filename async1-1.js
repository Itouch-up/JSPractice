//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_func
//Promise 객체를 리턴하는 함수
function p(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}