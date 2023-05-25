var word = "I am very good IT Developer";
console.log(` string : ${word}`);
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index); //
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log(char);
    count++;
  }
}
console.log(` * Count total vowels in a string is "${word}": ${count}`);
console.log(" ---------------------------------------------------------------");
console.log('----* "cube of a Number"----');

function cubeOfsum(num) {
  var cubesum = num * num * num;
  console.log(` Cub  of Number ${num} : ${cubesum}`);
  for (let index = 1; index < 5; index++) {
    console.log();
  }
}

cubeOfsum(1);
cubeOfsum(2);
cubeOfsum(3);
cubeOfsum(4);
cubeOfsum(5);

function sumcubeOf(num1, num2, num3, num4, num5) {
  var cubesum =
    num1 * num1 * num1 +
    num2 * num2 * num2 +
    num3 * num3 * num3 +
    num4 * num4 * num4 +
    num5 * num5 * num5;
  console.log(
    `  sum of Cub of a given  Number :${num1},${num2},${num3},${num4},${num5} is: ${cubesum}`
  );
  for (let index = 1; index < 5; index++) {
    console.log();
  }
}
sumcubeOf(1, 2, 3, 4, 5);
sumcubeOf(15,16,17,18,19);

console.log("-----------------------------------");
// to print the characters in the odd index position
var word = "Hard work always pays back";
console.log(` * string : "${word}"`);
var Count=0;
var string= "";
for (let index = 0; index <= word.length; index++) {
  var char = word.charAt(index); //
  if (index % 2==!0) {
    string= string.concat(char) .trim( )
    
  }
}
console.log( `    Odd positioned chars  :${string}`);
console.log("--------------------------------------------------");

var word = "Soon I will be Angular IT Champ";
console.log(` * string : "${word}"`);
var Count=0;
var string= "";
for (let index = 0; index <= word.length; index++) {
  var char = word.charAt(index); //
  if (index % 2==!0) {
    string= string.concat(char) .trim( )
    
  }
}
console.log( `    Odd positioned chars  :${string}`);
console.log("----------------------------------------");

function oddPositioneschars(string) {
  var str = "";
  for (let index = 0; index <string.length; index++) {
    char=string.charAt( index);
    if( index %2!==0 &&  char!= " "){
      str= str+ char;
    }
  }
  console.log( ` odd positining char  : ${ str}`);

}
oddPositioneschars("Hard work always pays back")
oddPositioneschars("Soon I will be Angular IT Champ")
oddPositioneschars(" My Name is Ashwini i am only one")