import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseInt(await userInput.question('Wat is aantal dagen? '));
let uren = parseInt(await userInput.question('Wat is aantal uren? '));
let minuten = parseInt(await userInput.question('Wat is aantal minuten? '));
let seconden = parseInt(await userInput.question('Wat is aantal seconden? '));

let totaalSeconden = (((dagen*24) + uren)*60 + minuten) * 60 + seconden

console.log('totaal aantal seconden is '+ totaalSeconden);





process.exit()
