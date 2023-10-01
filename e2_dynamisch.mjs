// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



let name = await userInput.question('Wat is jouw naam?');// Voeg hier je eigen code in
let age = await userInput.question('Hoe oud ben je?');
let favoriteGame = await userInput.question('Wat is jouw favoriete game?');




console.log('Hallo'+ name +', ik hoor dat je '+ age +'jaar oud bent en dat je lievelingsgame '+ favoriteGame +'is.');

process.exit();
