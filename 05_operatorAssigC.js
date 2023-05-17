


console.log  (" ------*TCS Interview Eligibility ------------");
var gradScore = 80;
var hscScore = 86;
var sscScore= 90;
var candidateName= " Ashwini"
var result= gradScore>=70 || hscScore >=80 || sscScore >=90  ? `Congrates ${candidateName} you are eligible for Tcs interview  .`: `Unfortunately  you are not  eligible for Tcs interview .`
console.log(`${result}`);

var gradScore = 70;
var hscScore = 65;
var sscScore= 55;
var candidateName= "Shubhangi "
var result= gradScore>=70 || hscScore >=80 || sscScore >=90  ? `Congrates  ${candidateName} you are eligible for Tcs interview . `: `Unfortunately  you are not  eligible for Tcs interview .`
console.log(`${result}`);

var gradScore = 60;
var hscScore = 79;
var sscScore= 88;
var candidateName= "kiran "
var result= gradScore>=70 || hscScore >=80 || sscScore >=90  ? `Congrates ${candidateName} you are eligible for Tcs interview . `: `Unfortunately ${candidateName} you are not  eligible for Tcs interview .`
console.log(`${result}`);
console.log( " -----------------------------------------------------");


function funex(gradScore,hscScore,sscScore,candidateName ) {
    console.log(  `* Grad Score = ${gradScore},Hcs Score= ${hscScore}, SSc Score = ${sscScore} , Candidate Name = ${candidateName}`);
    var result= gradScore>=70 || hscScore >=80 || sscScore >=90  ? `Congrates ${candidateName} you are eligible for Tcs interview . `: `Unfortunately ${candidateName} you are not  eligible for Tcs interview .`
console.log(`${result}`);
 
}
funex( 80,86,90,"Ashwini")
funex( 70,65,55,"Shubhangi")
funex( 60,79,88,"Kiran")