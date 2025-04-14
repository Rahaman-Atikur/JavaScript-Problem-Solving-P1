/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

-------------------------------------------------------------------------------
1.declare a string
2.create a function and pass into it 
3.from string word make array of word
4.measure the length of that word
5.compare and return max
 */
let givenString = 'I am learning Programming to become a programmer';
let maxWord='';
function longestWordFinder(givenString){
    let word =[];
    word = givenString.split(" ");
    for(let i=0;i<word.length;i++){
        if(word[i].length>maxWord.length){
             maxWord = word[i];
        }
    }
    return maxWord;

}
let res=longestWordFinder(givenString);
console.log(res);

