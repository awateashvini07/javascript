function countCharA(string) {
  var str = "";
    for (let index = 0; index <string.length; index++) {
    let  char=string.charAt( index);
      if (char =='a'|| char=='A')  {
       str++
      }
     
    }
    console.log( `String :  ${ string} : Total No.of char "a" or "A" available  in a string is : ${ str}`); 
  
}
countCharA("I AM Learning JavaScript, The Language of internet");
countCharA(  " My favourite movie is LAggAn")







