//conditional statements
//falsy = false,0,'',null,undefined,NaN
if ( false ) console.log( false )
if ( 0 ) console.log( false )
if ( '' ) console.log( '' )
if ( null ) console.log( null )
if ( undefined ) console.log( undefined )
if ( NaN ) console.log( NaN )
//truethy = true,num,string,{},[]
if ( true ) console.log( true )
if ( 37 ) console.log( 37 )
if ( -37 ) console.log( -37 )
if ( 'Mark' ) console.log( 'Mark' )
if ( {} ) console.log( {} )
if ( [] ) console.log( [] )
//if(){}else{}
const n =37;
if(n>0){
    console.log('n>0')
}else{
    console.log('n<0')
}