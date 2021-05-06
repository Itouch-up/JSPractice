function p(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}
p().then(()=>{
  return p()
})
.then(()=>p())
.then(p)
.then(()=>{
  console.log('4000ms후에 fulfilled됨')
})