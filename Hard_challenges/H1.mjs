import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question('Geef een aantal dagen:'));
let uren = parseFloat(await userInput.question('Geef een aantal uren:'));
let minuten = parseFloat(await userInput.question('Geef een aantal minuten:'));
let seconden = parseFloat(await userInput.question('Geef een aantal seconden:'));

dagen = dagen * 24 * 60 *60 ;
uren = uren * 60 * 60 ;
minuten = minuten * 60 ;

seconden += dagen + uren + minuten ;

console.log('Aantal seconden: ' + seconden);

process.exit();
