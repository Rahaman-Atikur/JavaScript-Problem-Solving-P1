/**
 * Task-3:
Write a function to count the number of vowels in a string.
----------------------------------------------------------------------

 */
let  withVowelsString = 'aeiolk';


function vowelCounter(withVowelsString) {
    let count = 0;
    for (let i = 0; i < withVowelsString.length; i++) {
        if (withVowelsString[i] === 'a'||withVowelsString[i] === 'e'||withVowelsString[i] === 'i' ||withVowelsString[i] === 'o'|| withVowelsString[i] === 'u') {
            count++;
        }
    }
    return count;
}
let result = vowelCounter(withVowelsString);
console.log(result);