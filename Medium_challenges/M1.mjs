import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = "5" ;
let getal2 = 450 ;

let som = getal1 + getal2 ; 
console.log(som);

let verschil = getal1 - getal2 ;
console.log(verschil);

let product = getal1 * getal2 ;
console.log(product);

let deling = getal1 / getal2 ;
console.log(deling);

process.exit();