let n=5
console.log(n%5==0 ? "a" : "b")
const message = n%5==0 ? "5의 배수가 맞습니다." : "5의 배수가 아닙니다."
console.log(message)
switch (n) {
    default:
        console.log(n)
}
switch (n%5) {
    case 0:
        console.log("5의 배수 입니다.")
        break;

    default:
        console.log("5의 배수가 아닙니다")
        break;
}