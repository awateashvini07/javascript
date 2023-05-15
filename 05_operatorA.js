function squareOfWordLength(network) {
  var string = network;
  console.log(` *${string}`);
  var stringlength = string.length;
  console.log(` lenght of ${string}: ${stringlength}`);
  var square = stringlength * stringlength;
  console.log(` square of ${string} char length : ${square}`);
}

squareOfWordLength(" JavaSript");
squareOfWordLength(" Google Chrome");
squareOfWordLength(" Developer Smart");
console.log(" -------------------------------------------------");

function dev(params) {
  var string = "I am Angular Developer";
  console.log(`string : ${string}`);
  var stringlength = string.length;
  console.log(` String length: ${string} : ${stringlength}`);
  var stringSplit = string.split(" ");
  console.log(stringSplit);
  console.log(  ` Total number words  available in that string:${stringSplit.length}`);
  var division = stringlength / stringSplit.length;
  console.log(` Division of string length and total number of words is: ${division}`);
  var multiplication = stringlength * stringSplit.length;
  console.log(` Multiplication of string length and total number of words is: ${multiplication}`);
}
dev();
console.log( " -----------------------------------------------");
