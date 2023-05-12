function stringHandsOn(params) {
    var string= " Hey you are doing good , keep it up" ;
    console.log( " String :", string);
}
stringHandsOn();
var string ="   Hey you are doing good , keep it up  ";
var stringlength= string.length;
console.log( " lenght of String : ",stringlength );


var trimmedstring = string.trim();
var lengthAfterTrim = trimmedstring.length;
console.log("After Trim  string is:", trimmedstring, trimmedstring.length );
console.log("Trimmed total spaces : ",stringlength-lengthAfterTrim);


var string="Hey you are doing good , keep it up"
console.log( string);
var stringlength= string.length;
console.log( " lenght of String : ",stringlength );

var charAtZeroIndex = string.charAt(0);
console.log("Char at 0 index: ",charAtZeroIndex);

var charAtLastIndex = string.charAt(string.length-1);
console.log("Char at last index: ",charAtLastIndex);