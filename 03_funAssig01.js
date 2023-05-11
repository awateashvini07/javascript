function star() {
  console.log("star function");
}
console.log("Before function call");

console.log("After function");
star(); // Function call or invoke

var space;
space = "----------------------------------------------------------------";
console.log(space);

function study() {
  console.log(" study function");
}
console.log(" Before function call");
console.log("After function call");
study(); // Function call or invoke

var space;
space = "----------------------------------------------------------------";
console.log(space);

function personalDetails(firstName, lastName, collegeName) {
  console.log(" personal Details");
  console.log(" first Name: ", firstName);
  console.log(" last Name: ", lastName);
  console.log("college Name:", collegeName);
}
personalDetails(
  " Ashwini",
  " Awate",
  " G.H.Raisoni college of Engineering pune."
);
var space;
space = "----------------------------------------------------------------";
console.log(space);

var name1 = "virat";
var name2 = "Anushka";
var num1 = "1000";
var num2 = "2000";
function swapValuesDude(valueOne, valueTwo) {
  console.log("Before Swap: ", valueOne, valueTwo);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log("After Swap: ", valueOne, valueTwo);
}
swapValuesDude(name1, name2);
swapValuesDude(num1, num2);
var space;
space = "----------------------------------------------------------------";
console.log(space);

// add three values
var n1=" 10.23";
var n2=" 600";
var n3=" 40";

function addThreeValues( valueOne, valueTwo ,valueThree) {
var result= valueOne + valueTwo + valueThree;
console.log( " Addition: ", result);
}
addThreeValues(10.23, 600, 40 );
addThreeValues( "  Hello","  Good","  Morning")
var space;
space = "----------------------------------------------------------------";
console.log(space);