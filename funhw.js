//1:Define a function maxOfTwoNumbers that takes two numbers as arguments 
//and returns the largest of them
//const PromptSync = require("prompt-sync")

maxOfTwoNumbers = (num1, num2) => {
    if( num1 > num2){
    return num1
    }else{
    return num2
}
}
console.log(maxOfTwoNumbers(67, 100))

//2.Define a function maxOfThree that takes three numbers as arguments 
//and returns the largest of them.
//maxOfTwoNumbers = (num1, num2, num3) =>{
    if( num1 > num2 && num1 > num3){
   return num1
}else if(num2 > num1 && num2 > num3){
    return num2
}else{
    return num3
}

console.log(maxOfTwoNumbers(18, 33, 2))

//3.Write a function isCharacterAVowel that takes a character(i.e.a string of length 1) 
//and returns true if it is a vowel, false otherwise.
var prompt = ('prompt-sync')();
var userInput = prompt ('Pick a letter, is it a Vowel??')

isCharacterAVowel = (i) => ['a'|| 'e'|| 'i'|| 'o'|| 'u'] ? true : false
console.log(isCharacterAVowel(userinput))

    
    


//4.Define a function sumArray and a function multiplyArray that sums and multiplies
//(respectively) all the numbers in an array of numbers.
//For example, sumArray([1, 2, 3, 4]) should return 10, 
//and multiplyArray([1, 2, 3, 4]) should return 24.


sumArray = (num1, num2, num3, num4) = >  (num1 + num2 + num3 +num4)
//multipleArray = (num1, num2, num3, num4) => {}



console.log(2, 4, 6, 8)


//6.Define a function reverseString that computes the reversal of a string.For example,
// reverseString("jag testar") should return the string "ratset gaj".

//7.Write a function findLongestWord that takes an array of words and 
//returns the length of the longest one.

var prompt = require('prompt-sync')();
var array = prompt('What brings you to town?');
let longestWord;

findLongWord = (str) => {
    let words = str.split(' ');
    let maxLength = 1;
    for (let i = 0; i < words.length; i++) {
        if (words[i].lenght > maxLength) {
            maxLength + words[i].length;
            longestWord = words[i];
        }
    }
    console.log('Our longest word is, ' + longestWord + ' !!');
    return ' The length is ' + maxLength + ' !!';
}
console.log(findLongestWord(array));

//.Write a function filterLongWords that takes an array of words and
//a number i and returns the array of words that are longer than i characters long.