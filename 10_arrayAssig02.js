const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(` 1. Array Number is: ${arrayNumbers}`);
console.log(`------------------------------------`);

let lengthOfArrayNumbers = arrayNumbers.length;
console.log(`2.Length of Array Number is : ${lengthOfArrayNumbers}`);
console.log(`------------------------------------`);

let arrayLength = arrayNumbers.length;
const thirdlastElement = arrayNumbers[arrayLength - 3];
console.log(`3.  third Last element is: ${thirdlastElement}`);
console.log(`------------------------------------`);

console.log(`4. odd position number`);
const Numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const index in arrayNumbers) {
  if (index % 2 !== 0) {
    console.log(` odd position Number:${arrayNumbers[index]}`);
  }
}
console.log(`------------------------------------`);

console.log(`5.Even position number`);
const numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const index in arrayNumbers) {
  if (index % 2 == 0) {
    console.log(` Even position Number:${arrayNumbers[index]}`);
  }
}

console.log(`------------------------------------`);

console.log(`5.Even number`);
num = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (let index = 0; index < num.length; index++)
  if (num[index] % 2 == 0) {
    console.log(` Even  Number:${num[index]}`);
  }
  console.log(`------------------------------------`);

  console.log(`6. addition of Even number`);
num = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 var evenSum=0;
for (let index = 0; index < num.length; index++){
  if (num[index] % 2 == 0)
      evenSum= evenSum+num[index];
}
{
    console.log(`   Addition of Even Number:${evenSum}`);
  }


console.log(`------------------------------------`);
console.log(`7. odd number`);
num1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (let index = 0; index < num.length; index++)
  if (num[index] % 2 !== 0) {
    console.log(` Odd Number:${num[index]}`);
  }

console.log(`------------------------------------`);

console.log(`8. addition of odd number`);
num = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 var oddSum=0;
for (let index = 0; index < num.length; index++){
  if (num[index] %2!== 0)
      oddSum= oddSum+num[index];
}
{
    console.log(` Addition of odd Number:${oddSum}`);
  }

  console.log(`------------------------------------`);

  console.log(`9. addition of  element from array numbers`);
  num = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
   var Sum=0;
  for (let index = 0; index < num.length; index++){
    if (num[index])
        Sum= Sum+num[index];
  }
  {
      console.log(` Addition of element from array numbers is : ${Sum}`);
    }
    console.log(`------------------------------------`)


console.log(`10 . multiple of 5 number `);
num1 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (let index = 0; index < num.length; index++)
  if (num[index] % 5 == 0) {
    console.log(` multiple of 5  numbers : ${num[index]}`);
  }
console.log(`------------------------------------`);

let setcountNumber = new Set();
setcountNumber.add(20);
setcountNumber.add(31);
setcountNumber.add(40);
setcountNumber.add(25);
setcountNumber.add(23);
setcountNumber.add(11);
setcountNumber.add(29);
setcountNumber.add(9);
setcountNumber.add(60);
setcountNumber.add(2);
setcountNumber.add(11);


isAvailable=setcountNumber.has( 115)
console.log( ` 11. Is number 115 available in arrayNumber :   ${ isAvailable}`);

console.log(`---------------------------------------------------`);

isAvailable=setcountNumber.has( 23)
console.log( `12. Is number 23 available in arrayNumber :  ${ isAvailable}`);

console.log(`------------------------------------------------`);

console.log(`13 . Add element before index 3 `);
  var arrayNum = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

 console.log( `arrayNum : ${arrayNum}`);
 arrayNum.splice(3, 0, " 55, 66")
console.log( `Add Elements before index 3:  ${arrayNum}`);
console.log(`------------------------------------------------`);

console.log(`14 . Delet element  `);

console.log( `arrayNum : ${arrayNum}`);
 arrayNum.splice(4, 3 )
console.log( ` Delet 3 Elements start with index 4 :  ${arrayNum}`);
console.log(`--------------------------------------------------------`);