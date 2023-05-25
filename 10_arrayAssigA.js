var arrayFruits = ["Banana"," Orange", " Appale", " Mango", " Water Melon"  ];
console.log( `Fruits : ${arrayFruits}`);
console.log(`Type of array: ${typeof arrayFruits}`);
console.log("----------------");

let lengthOfArray = arrayFruits.length;
console.log(`Length of array is : ${lengthOfArray}`);
console.log("----------------");

var arrayFruits = ["Banana"," Orange", " Appale", " Mango", " Water Melon"  ];
arrayFruits.splice( 3,1)
console.log(` Remove Mango in Fruits : ${arrayFruits }`);

console.log("----------------");
const zerothIndexValue = arrayFruits[0];
console.log(`First element: ${zerothIndexValue}`);
console.log("----------------");
let arrayLength = arrayFruits.length;
const lastElement = arrayFruits[arrayLength-1];
console.log(`Last element: ${lastElement}`);

console.log("----------------");

console.log( `Fruits : ${arrayFruits}`);
arrayFruits.unshift( "Papaya ");
console.log( `Add Element before Banana : ${arrayFruits}`);
console.log("----------------");

console.log( `Fruits : ${arrayFruits}`);
arrayFruits.push( " Pineapple ");
console.log( `Add Element At last Position : ${arrayFruits}`);

console.log("----------------");
console.log( `Fruits : ${arrayFruits}`);
arrayFruits.splice(5, 0, " Dragon Fruit")
console.log( `Add Element before water Melon:  ${arrayFruits}`);

console.log("----------------");
arrayFruits[2] = " kiwi";
console.log(`Replace an element 'Orange' with 'kiwi' : ${arrayFruits}`);

var arrayFruits = ["Banana"," Orange", " Appale", " Mango", " Water Melon"  ];
let arrSpliced =arrayFruits.splice(1, 4);
console.log(` Element start from index 1,4 : ${ arrSpliced}`);

console.log("----------------");

var arrayFruits = ["Banana"," Orange", " Appale", " Mango", " Water Melon"  ];
const slicedarrayFruits = arrayFruits.slice(2);
console.log(`  last 3 Elements : ${slicedarrayFruits}`);

console.log("----------------");

