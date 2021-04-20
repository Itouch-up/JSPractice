function hello(c){
    console.log('Hello')
    c()
}

hello(function(){
    console.log('callback')

})