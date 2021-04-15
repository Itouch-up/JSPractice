// for(a;b;c){
//     d
// }
// e
// a->d->c->b->d->c->b->e
for(let i=0;i<5;i++){
    console.log("hi")
}
for(let i=0,j=2;i<5;i++,j=j*j){
    console.log(i,j)
}
i=2
// while(조건){
//     조건이 거짓이 될때까지 반복 실행
// }
while(i<40){
    console.log(i)
    i*=i
}
// do{
//     조건이 거짓이 될 때까지 반복 실행(while과 다른점 do-while문은 무조건 한번이상 실행됨)
// }while(조건)
j=100
do{
    console.log(j)
}while(j<0)
//for of(interable)
for(const i of[1,2,3]){
    console.log(i)
}
//for in(모든 프로퍼티)
Object.prototype.test = function(){}
for(const i in{a:1,b:2,c:3}){
    console.log(i)
}