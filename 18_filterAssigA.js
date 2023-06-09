const arrayNumbers=[20,11,40,25,37,49,9, 90,60,2,19];

console.log(`1.. Numbers greater than 50`);
const arrayNumbersGreater= arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayNumbersGreater);
console.log(`__________________________________________`);

console.log(`2.. All Even Numbers`);
const arrayEven = arrayNumbers.filter( (element) => {
    return element%2==0;
} );
console.log(arrayEven);
console.log(`__________________________________________`);

console.log(`3.. All Odd Numbers`);
const arrayOdd = arrayNumbers.filter( (element) => {
    return element%2!==0;
} );
console.log(arrayOdd);
console.log(`__________________________________________`);

console.log(`4.. All the Numbers which are multiple of 5 `);
const arrayMul = arrayNumbers.filter( (element) => {
    return element%5==0;
} );
console.log(arrayMul);
console.log(`__________________________________________`);

console.log(`5..  Numbers which are between 20 and 50`);
const arrayNumbersbtw= arrayNumbers.filter( (element)=> {
    return element<=50 && element>=20;
} );
console.log(arrayNumbersbtw);

console.log(`__________________________________________`);