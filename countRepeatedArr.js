/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
--------------------------------------------------------------------------------
1.Declare an array
2. pass that array and that number in a function
3. loop through and find the repeated number using includes
4. count in every push 
5.  return that count value

 */
let  numbers = [5, 6, 11, 12, 98, 5];
let searchingNumber = 25;
function repeatedCounter(numbers, searchingNumber) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === searchingNumber) {
            count++;
        }
    }
    return count;
}
let result = repeatedCounter(numbers, searchingNumber);
console.log(result);