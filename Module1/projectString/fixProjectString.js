// im utilizing couples of string method to rewrite my message, inside the string message few words are spelled wrong.
// And i used the replace string method to correct the words.
// And i also used the Includes string method to check for words in my sentence.
//Endwith method was also used to check where the sentence ended which give false when console it because the ended with a different word.
// statwith method was used to check what the sentence started with.
// i used the Vowelcapture method to count how many Vowels was in the sentence. when console log it the total vowels was 41.


let message = 'life is love a rollercoaster sometime it goes up and dowmnm and i\'m looking forward to the dau i graduate from Per Scholar.'

let sentence = message
let vowelCapture = 'aeiou'
let numOfVowel = 0
let newSent = sentence.toLowerCase();


 for(let index=0; index<sentence.length; index++){
     for(let vowel = 0; vowel < vowelCapture.length; vowel++){
         if(sentence[index] === vowelCapture[vowel]){
             numOfVowel++
             console.log(sentence[index]);
 
 
             break;

         }
     }

 }
 
 console.log(message.replace('dowmnm','down'))
 console.log(message.replace(/love/gi, 'like'))
 console.log(message.replace(/dau/gi, 'day'))
console.log(sentence)
console.log(sentence.includes('rollercoaster'))
console.log(sentence.endsWith('graduate'))
console.log(sentence.startsWith('life'))
console.log(' vowelCapture ' + numOfVowel)

