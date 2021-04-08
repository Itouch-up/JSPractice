let whatever = 'Mark'

whatever = 37;

whatever = true;
//js datatype
/*
기본 타입
Boolean
NUll
Undefined
Number
String
Symbol(EcmaScript 6 에 추가)
객체
*/
//Boolean
const isTrue = true
const isFalse = false

console.log( isTrue, typeof isTrue )
console.log( isFalse, typeof isFalse )

const a = new Boolean( false )
console.log( a, typeof a )
if ( a ) {
    console.log( 'false?' )
}
const b = Boolean( false );
console.log( b, typeof b )
if ( b ) {
    console.log( 'false?' )
}
//Null
const c = null
console.log( c, typeof c )
//undefined
let d
console.log( d, typeof d )

if ( c == d ) {
    console.log( a == b )
}
if ( c === d ) {
    console.log( c === d )
}
//number
const e = 37
console.log( e, typeof e )
const f = 3.14
console.log( f, typeof f )

const g = NaN
console.log( g, typeof g )
const h = Number( 'Mark' )
console.log( h, typeof h )
const i = Number( '37' )
console.log( i, typeof i )
//String
const j = 'mark'
console.log( j, typeof j )
const k = "Mark" + "Lee"
console.log( k, typeof k )
const l = `${j} Lee`
console.log( l )
//symbol
const m = Symbol()
const n = Symbol( 37 )
const o = Symbol( 'Mark' )
const p = Symbol( 'Matk' )
console.log( m, typeof m )
console.log( o === p )