const array = [10, 5, 'a', 'b', 'h', 11];
 console.log( `Given  array : ${array}`);

 var stringarray=[];
 var numberarray=[];
  array.forEach(element => {
    if (typeof (element)==="string") {
        stringarray.push(element);
    
    }
    if (typeof (element)==="number") {
        numberarray.push(element);
    }
 });


 var newarray= stringarray.concat(numberarray);
 console.log(newarray );
 console.log( `Alphabets present in given array: ${ stringarray}`);
 console.log( `Numbers present in given array: ${numberarray}`);