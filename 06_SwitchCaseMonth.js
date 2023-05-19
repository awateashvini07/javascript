//monthNumber
//1-January
 //2-February
 //3-march
//4-April
//5-May 
//6-June 
//7-Jully
//8-August 
// 9-September
//10-October
// 11-November
// 12-December

function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
          console.log(`Month 1 is: January as month number is ${monthNumber}`);
          break;
          case 2:
            console.log(`Month 2 is: February as month number is ${monthNumber}`);
            break;
            case 3:
            console.log(`Month 3 is: March as month number is ${monthNumber}`);
            break;
            case 4:
            console.log(`Month 4 is: April as month number is ${monthNumber}`);
            break;
            case 5:
            console.log(`Month 5 is: May as month number is ${monthNumber}`);
            break;
            case 6:
            console.log(`Month 6 is: June as month number is ${monthNumber}`);
            break;
            case 7:
            console.log(`Month 7 is: Jully as month number is ${monthNumber}`);
            break;
            case 8:
            console.log(`Month  8is: August as month number is ${monthNumber}`);
            break;
            case 9:
            console.log(`Month 9 is: September as month number is ${monthNumber}`);
            break;
            case 10:
            console.log(`Month 10 is: October as month number is ${monthNumber}`);
            break;
            case 11:
            console.log(`Month 11 is: November as month number is ${monthNumber}`);
            break;
            case 12:
            console.log(`Month 12 is: December as month number is ${monthNumber}`);
            break;
    default:
    console.log(` Invalid Month : ${monthNumber} `);
    break;
            
    
}
} 

 monthOfYear( 0)
 monthOfYear( 2)
 monthOfYear( 5)
 monthOfYear( 12)
 monthOfYear( 15)
 monthOfYear( 100)
 monthOfYear( null)
 monthOfYear( undefined)
 