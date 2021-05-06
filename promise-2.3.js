function p(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      reject()
    }, 1000);
  })
}

p().then(()=>{
  console.log('1000ms 후에 fulfilled 됩니다.')
}).catch(()=>{
  console.log('1000ms 후에 rejected 됩니다.')
})