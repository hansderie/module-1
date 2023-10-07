import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let getal  = parseInt(await userInput.question('Wat is getal? '));
getal = getal + parseInt(await userInput.question('Wat is getal 2? '));
getal = getal + parseInt(await userInput.question('Wat is getal 3? '));
getal = getal + parseInt(await userInput.question('Wat is getal 4? '));

console.log(getal/4);

process.exit()


