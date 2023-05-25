
function greaterNumber (num1,num2) {
    console.log( ` * Numbers= ${ num1},${ num2}`);
    var result = num1 > num2 ?` ${num1} is greater`:` ${num2} is greater`;
console.log( ` Result = ${ result}`);
}
greaterNumber(10,-10 )
greaterNumber( 800,899)
console.log("----------------------------------------");


console.log(" * Numbers is Even /odd");

function  isEvenOrOddNum(num) {
    var result = num%2 == 0 ? " true" : "flase";
    console.log( ` ${ result}`);
    return result;
    
    
}
console.log( " _Number = 29");
var result = isEvenOrOddNum( 29);
var res = ( result == true)? " 29 is even number":" 29 is odd number"
console.log( ` ${ res}`);
console.log(" ----------------------------------------");

console.log( " _Number = 44");
var result = isEvenOrOddNum( 44);
var res = ( result == true)? "44 is even number":" 44 is odd number"
console.log( ` ${ res}`);
console.log(" ----------------------------------------");

console.log( " _Number = 0 ");
var result = isEvenOrOddNum( 0);
var res = ( result == true)? " 0 is even number":" 0 is odd number";
console.log( ` ${ res}`);
console.log(" ----------------------------------------");

console.log( " _Number = 101");
var result = isEvenOrOddNum( 101);
var res = ( result == true)? "101 is even number":" 101 is odd number"
console.log( ` ${ res}`);
console.log(" ----------------------------------------");


function squareOfWordLength(network) {
    var string = network;
    console.log(` *${string}`);
    var stringlength = string.length;
    console.log(`  world lenght of ${string}: ${stringlength}`);
    var result = stringlength%2 == 0 ? "  is EVEN  world lenght" : "  is ODD world lenght";
     console.log(`${result}`);

    
  }
  squareOfWordLength(" JavaSript");
  squareOfWordLength(" Google ");
  squareOfWordLength(" Developer ");
  console.log(" -------------------------------------------------");


var string =networ
