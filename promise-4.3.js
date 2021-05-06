function p(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(ms)
    }, ms);
  })
}
Promise.all([p(1000),p(2000),p(3000)]).then((message)=>{
  console.log('모두 fulfilled된 이후에 실행됨',message)
})