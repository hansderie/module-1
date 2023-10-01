import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Wat is getal 1? '));
let getal2 = parseFloat(await userInput.question('Wat is getal 2? '));

console.log('som='+ (getal1+getal2));


process.exit()
