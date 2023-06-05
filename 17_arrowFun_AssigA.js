console.log(` 1. Arrow function with no arguments and no return value`);
 
 let show  = ( )=> {
     console.log( ` "Good Morning, Today is Monday"`);
}
show ();
console.log(" --------------------------------------------------");

console.log(` 2. Arrow function with three arguments and no return value`);
 let multiplication =( num1,num2,num3)=>{
     let mul=num1*num2*num3;
     console.log( `multiplication of ${num1}*${num2}*${num3} = ${mul}` );
 }
 multiplication( 5,5,2);
 multiplication( 10,4,1);
 console.log(" --------------------------------------------------");

 console.log(` 3. Arrow function with five  arguments and  return value`);

 let add = (num1, num2,num3, num4,num5) => {
    let result = num1 + num2 + num3+ num4+ num5
    return result;
}
let result = add( 100, 100, 200,349,756 );
console.log(`Addition  of  Nunbers is = ${result}`);


let sum= (v1, v2,v3, v4,v5) => {
    let result = v1 + v2+ v3+ v3+ v5
    return res;
}
let res = add( " I am" ," learing" ," ES6", " features", " in depth." );
console.log(`Addition  words is = ${res}`);
console.log(" --------------------------------------------------");