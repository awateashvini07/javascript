function checkLeapYear(LeapYear) {
  if (LeapYear== null || LeapYear==undefined ||LeapYear== "Twenty Twenty" ||LeapYear=="NaN"  ) {
    console.log(`"${LeapYear}": is not valid input`);
  } else {
    if (LeapYear % 4 == 0) {
      console.log(`"${LeapYear}" year is Leap year `);
    } else {
      console.log(`"${LeapYear}"  year is Not Leap year `);
    }
  }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(1750);
checkLeapYear(null);
checkLeapYear("NaN");
checkLeapYear(undefined);
checkLeapYear("Twenty Twenty");
checkLeapYear( 400);
checkLeapYear( 599);

