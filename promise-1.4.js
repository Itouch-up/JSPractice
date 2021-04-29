// executor함수 인자 중 하나인 reject함수를 실행하면, rejected(거부)상태가 됨
new Promise((resolve,reject)=>{
  reject()//rejected
})