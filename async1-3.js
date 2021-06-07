function p(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      // resolve(ms)
      reject(new Error('reason'))
    }, ms)
  })
}
//await
(async function main(){
  const ms = await p(1000)
})()