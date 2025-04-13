/**
 * Calculate the avg of  odd number of an array
 * ----------------------------------------------------------------------------------------
 * 1.Declare an array
 * 2.pass it to a function
 * 3.then loop through and check is it odd
 * 4. if so then sum of them and count them how many 
 * 5. then calculate avg and return that value
 */
let arr = [7,11,13];
function avgOdd(arr) {
    let cnt = 0;
    let sum = 0;
    for (let i =0;i<arr.length;i++) {
        if (arr[i] % 2 === 1) {
            cnt++;
            sum = sum + arr[i];
        }
    }
    let avg = sum/cnt;
    return avg;
}
let result = avgOdd(arr);
console.log(result);