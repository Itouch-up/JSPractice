Promise.resolve(/*value*/)
Promise.resolve(new Promise((resolve,rejecet)=>{
  setTimeout(() => {
    resolve('f')
  }, 1000);
})).then((data)=>{
  console.log('promise 객체인 경우, resolve된 결과를 받아 then이 실행됩니다.',data)
})
Promise.resolve('bar').then(data=>{
  console.log('then 메서드가 없는경우, fulfilled됩니다.',data)
})