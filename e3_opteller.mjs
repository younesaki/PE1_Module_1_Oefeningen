// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



let getal1 = parseFloat(await userInput.question('Geef een getal in:'));// Voeg hier je eigen code in
let getal2 = parseFloat(await userInput.question('Geef een ander getal in:'));

let som = getal1 + getal2 ;

console.log(som);

process.exit();
