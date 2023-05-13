console.log( "----- 1.Square of the Number------");
function square(num ) {
    var result= num*num;
   console.log( ` Square of the number 5 is: ${ result}`);
}
    square(5);
   
    function square1(num1 ) {
        var result= num1*num1;
       console.log( ` Square of the number 6 is: ${ result}`);
    }
        square1(6);
        function square2(num2 ) {
            var result= num2*num2;
           console.log( ` Square of the number 25 is: ${ result}`);
        }
            square2(25);
            function square3(num3 ) {
                var result= num3*num3;
               console.log( ` Square of the number 100 is: ${ result}`);
            }
                square3(100);
               
            console.log( "----- 2. Type of variable------");
            var square = typeof square;
         console.log( ` type of square is: ${square}`)
         console.log( "-----3 . Area of reactangle plot------");

          function area(length,width) {
           var areaofareaOfPlot=length*width;
          console.log( ` Area of Reactangle plot : ${areaofareaOfPlot}`);
         }
            area( 499,917)

            console.log( "----- 4. swap  variables------");
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
            console.log( "----- 5. string ------");

            function stringHandsOn(params) {
                var string = "JS the most popular language of internet";
                console.log(` .string : ${string}`);
                var stringlength = string.length;
                console.log(` a.String length: ${string} : ${stringlength}`);
              }
              stringHandsOn();
              var string = "JS the most popular language of internet";
              var charAtIndex6 = string.charAt(6);
              console.log( " b. char of sring at 6: ", charAtIndex6 );

              var charAtIndex11 = string.charAt(11)
              console.log( " c. char of sring at 11: ", charAtIndex11 );

              var charAtLastIndex = string.charAt(string.length - 1);
             console.log(` d. last char of string  :  ${charAtLastIndex}`);

             var charAtZeroIndex = string.charAt(0);
             console.log(` e. first char of string : ${charAtZeroIndex}`)

             var string = "JS the most popular language of internet";
             var resultSplit = string.split(" ");
             console.log(resultSplit);
             console.log(" f.Total number of words: ",resultSplit.length);

             var squarofresultsplit=resultSplit.length*resultSplit.length;
             console.log( `g. square of total no words : ${squarofresultsplit }`);
 