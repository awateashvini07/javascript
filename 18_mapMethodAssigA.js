
let arrayNumbers=[20, 11, 40,25,23,11,9,31,60,2,19]
console.log( `1.Add 10 into each element`  );
let a= arrayNumbers.map(( value)=>{
    console.log(value);
    return value + 10
})
console.log(a);
console.log("______________________________________________________");
console.log( `2.Square of each array element`  );
let c= arrayNumbers.map(( value)=>{
    console.log(value);
    return value*value
})
console.log(c);

console.log("______________________________________________________");
console.log( `3. Add  index value into each element`  );
let b= arrayNumbers.map(( value,index)=>{
    console.log(value,index);
    return value + index
})
console.log(b);
console.log("______________________________________________________");