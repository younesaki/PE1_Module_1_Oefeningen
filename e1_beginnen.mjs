import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let name = 'Younes';// Voeg hier je eigen code in
let age = 19 ;
let favoriteGame = 'Fifa';

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');