function funex(gradScore,hscScore,sscScore,candidateName ) {
    console.log(  `* Grad Score = ${gradScore},Hcs Score= ${hscScore}, SSc Score = ${sscScore} , Candidate Name = ${candidateName}`);
    if (gradScore>=70 || hscScore >=80 || sscScore >=90) {
        console.log(`Congrates ${candidateName} you are eligible for Tcs interview .` );
        
    } else {
        console.log( `Unfortunately ${candidateName} you are not  eligible for Tcs interview .`);
        
    }
    
 
}
funex( 80,86,90,"Ashwini")
funex( 70,65,55,"Shubhangi")
funex( 60,79,88,"Kiran")