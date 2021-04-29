/*
ES6 부터 JavaScript의 표준 내장 객체로 추가됨
ES6 를 지원하는 브라우저나 Node.js 에서 전역에 있는 Promise 를 확인할 수 있음
*/
/*
executer 함수는 resolve와 reject를 인자로 가짐
  (resolve,reject)=>{...}
resolve와 reject는 함수
  resolve(), reject()
*/
new Promise(/*excutor*/(resolve,reject)=>{})