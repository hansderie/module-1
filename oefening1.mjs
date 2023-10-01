// Voeg hier je eigen code in
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = await userInput.question('Wat is je naam? ');
let age = await userInput.question('Hoe oud ben je? ');
let favoriteGame = await userInput.question('lieveligsspel? ');
let town = 'Grimbergen'




console.log('Hallo '+ jeNaam +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is en je woont in '+ town);




process.exit();

