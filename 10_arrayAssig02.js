const arrayNumbers = [ 20,  31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(` 1.total no. of Array Number is: ${arrayNumbers}`);
console.log(`------------------------------------`);


let lengthOfArrayNumbers = arrayNumbers.length;
console.log(`2.Length of Array Number is : ${lengthOfArrayNumbers}`);
console.log(`------------------------------------`);

let arrayLength = arrayNumbers.length;
const thirdlastElement = arrayNumbers[arrayLength-3];
console.log(`3.  third Last element is: ${thirdlastElement}`);
console.log(`------------------------------------`);

for (const index in arrayNumbers) {
    if (index%2==0) {
     console.log(` Even position Number:${arrayNumbers[index]}`);
     
    }
 }


 const Numbers = [ 20,  31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 for (const index in arrayNumbers) {
    if (index%2!==0) {
     console.log(` odd position Number:${arrayNumbers[index]}`);
     
    }
 }
 