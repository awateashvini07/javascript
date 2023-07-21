
let value= "madam";
const revValue= ()=> {
    let revString= value.toString().split("").reverse().join("");
    let stringval= value.toString();

if(stringval=revString ){
   // console.log( "given string is Palindrome");
}else{
    //console.log( `given String is not  Palindrome`);
}
    
};
revValue("");

function isPal(str) {
    let reverse=str.split("").reverse().join("");
  return str.toLowerCase()==reverse.toLowerCase();

    
}
 let str="madam";
 console.log(" 1.",str);
console.log( isPal("madam"),": given string is palindrome"  );
console.log(`______________________________________________________`);

let str1="141";
 console.log(" 2.",str1);
console.log( isPal("141"),": given string is palindrome"  );
console.log(`______________________________________________________`);

let str2="Sunday";
 console.log(" 3.",str2);
console.log( isPal("Sunday"),": given string is not palindrome"  );
console.log(`______________________________________________________`);

let str3="mom";
 console.log(" 4.",str3);
console.log( isPal("mom"),": given string is palindrome"  );
console.log(`______________________________________________________`);

let str4="listen";
 console.log(" 5.",str4);
console.log( isPal("listen"),": given string is not palindrome"  );
console.log(`______________________________________________________`);
let str5="dad";
 console.log(" 6.",str5);
console.log( isPal("dad"),": given string is palindrome"  );


