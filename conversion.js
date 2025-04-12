/**
 * Feet to inch conversion
 */


let inch = 75;
function inchTofFeet(inch) {
    return parseInt((inch / 12));
}
function inchTofFeetTwo(inch) {
    return parseInt(inch % 12);
}
let resultOne = inchTofFeet(inch);
let resultTwo = inchTofFeetTwo(inch);
console.log(resultOne + ' ' + 'ft' + ' ' + resultTwo + ' ' + 'inch');



/**
 * Miles to km conversion
 */

let km = 50;
function kmToMileConverter(km){
    let kilometer =  km/1.609;
    return kilometer.toFixed(2);
}
let result = kmToMileConverter(km);
console.log(result);
