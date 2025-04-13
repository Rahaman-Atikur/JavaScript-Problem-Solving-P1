/**
 * Find a year  leap year or not 
 * 1.Declare a variable 
 * 2.send it to a function 
 * 3. if(year%4===0 || year%400===0) return true
 */
let year = 2024;
function isLeapYear(year) {
    if (year % 4 === 0 || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
let what = isLeapYear(year);
console.log(what);