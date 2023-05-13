function stringHandsOn(params) {
  var string = "   Hey you are doing good , keep it up  ";
  console.log(` is a string : ${string}`);
  var stringlength = string.length;
  console.log(` String length: ${string} : ${stringlength}`);
  console.log("---step 3-----");
  var trimmedstring = string.trim();
  var lengthAfterTrim = trimmedstring.length;
  console.log(` After Trim string is : ${trimmedstring}`);
  console.log(` length After Trim string : ${lengthAfterTrim}`);
}
stringHandsOn();

var string = "Hey you are doing good , keep it up";
var charAtZeroIndex = string.charAt(0);
var charAtLastIndex = string.charAt(string.length - 1);
console.log(
  ` fist And last char of string trim : ${charAtZeroIndex} , ${charAtLastIndex}`);

var searchResult = string.search("good");
console.log(`Search Result for good : ${searchResult} `);

var sliceResult = string.slice(17, 22);
console.log(`slice Result:${sliceResult} `);

var sliceResult = string.slice(22, 35);
console.log(`slice Result After 22:${sliceResult} `);

var result = string.endsWith("up");
console.log(` Is ${string} :  string ends with character "up" : ${result}`);

var result = string.startsWith("Hey");
console.log(` Is ${string} :  string start with character "Hey" : ${result}`);

var stringlength = string.length;
console.log(` String: ${string} :  lenght of string:  ${stringlength}`);
