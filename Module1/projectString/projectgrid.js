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

