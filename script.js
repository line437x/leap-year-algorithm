"use strict";

isItLeapYear(2020);

function isItLeapYear(year) {
  let returnFlag = false;
  if (year % 4 === 0) {
    returnFlag = true;
  } else if (year % 100 === 0) {
    if (year % 400 === 0) {
      returnFlag = true;
    }
  }
  console.log(`its a leap year: ${returnFlag}`);
  return returnFlag;
}
