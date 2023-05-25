function factorialofnum(num) {
    
let factorial= 1;
for (let index = num; index >= 1; index--) { 
  factorial  = factorial* index; 
}
if (num==undefined|| num== null) {
    console.log(`${num} is : Invalid Input` );
    
}
else
console.log(`Factorial of ${ num} is  : ${ factorial} `);
}
factorialofnum(3)
factorialofnum(5)
factorialofnum(8)
factorialofnum( 9)
factorialofnum(0)
factorialofnum(null)
factorialofnum(undefined)