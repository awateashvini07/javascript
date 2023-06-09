  const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601 ]
  console.log( ` 1..array elements with is index`);
  arrayNumbers.forEach( ( element, index, array ) => {
    console.log(`${element} : ${index} `);
}  );
console.log( ` ------------------------------------------`);
console.log( `2.. positive element`);
arrayNumbers.forEach((element)=>{
    if ( element>0) {
        console.log( element);
        
    }
})
console.log( ` ------------------------------------------`);
console.log( `3.. Negative  element`);
const arrayNegtive=[]
arrayNumbers.forEach((element)=>{
    if ( element<0) {
        arrayNegtive.push( element);
        
    }
})
arrayNegtive.forEach(element =>console.log(element))
console.log( ` ------------------------------------------`);

console.log( `4.. even Numbers`);
arrayNumbers.forEach((element)=>{
    if ( element%2==0) {
        console.log( element);
        
    }
})
console.log( ` ------------------------------------------`);

console.log( `5.. sum of all element `);
let num=0;
arrayNumbers.forEach( ( element)=> {
num=num+element
});
console.log(num);


console.log( ` ------------------------------------------`);

console.log( `6.. even index value `);
arrayNumbers.forEach( ( element,index)=> {
    if( index%2==0){
        console.log(element);
    }
});
