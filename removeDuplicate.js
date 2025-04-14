/**
 * Remove duplicate from an given array
 * ----------------------------------------------------------------------
 * 1.Declare an array
 * 2.Create a function and pass it
 * 3.Create another array 
 * 4. loop through and Check new array element exists , if not exists then push to new array
 * 5.In array includes() false then push
 * 6. return new array and print 
 */
let duplicateArray = [1, 1, 2, 3, 4, 3,1,2];
// [1,2,3,4]
console.log(duplicateArray.length);
let uniqueArray = [];
function removeDuplicate(duplicateArray) {
    for (let i = 0; i < duplicateArray.length; i++) {
        if (uniqueArray.includes(duplicateArray[i]) == false) {
            uniqueArray.push(duplicateArray[i]);
        }
    }
    return uniqueArray;
}
let result = removeDuplicate(duplicateArray);
console.log(result);
