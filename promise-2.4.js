function p(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('hello')
    }, 1000);
  })
}

p().then((message)=>{
  console.log('1000ms 후에 fulfilled 됩니다.',message)
}).catch(()=>{
  console.log('1000ms 후에 rejected 됩니다.')
})