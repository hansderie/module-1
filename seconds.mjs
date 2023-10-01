import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Wat is aantal dagen? '));
let getal2 = parseFloat(await userInput.question('Wat is aantal uren? '));
let getal3 = parseFloat(await userInput.question('Wat is aantal minuten? '));
let getal4 = parseFloat(await userInput.question('Wat is aantal seconden? '));

console.log('totaal aantal seconden is '+ (getal4+(getal3*60)+(getal2*3600)+(getal1*(3600*24))));





process.exit()
