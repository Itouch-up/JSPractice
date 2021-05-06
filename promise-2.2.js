function p(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}

p().then(()=>{
  console.log('1000ms 후에 fulfilled 됩니다.')
})