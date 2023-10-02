import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = 2004;
let toekomstJaar = 2044;

toekomstJaar = toekomstJaar - geboorteJaar ;

console.log('In 2044 zal ik ' + toekomstJaar-- + ' of ' + toekomstJaar + ' jaar oud zijn.');

process.exit();
