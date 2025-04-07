#!/usr/bin/env node
import cli from '../src/cli.js';
import iseven from '../src/iseven.js';


console.log('Welcome to the Brain Games!');
const userName = cli();


console.log('Answer "yes" if the number is even, otherwise answer "no".')

let counter = 0;
while (counter <3) {
    let result = iseven();
    if (result === true) {
        counter ++;
    } else if (result === false) {
        console.log(`Let\'s try again, ${userName}!`)
        break
    }
};

if(counter === 3) {
console.log(`Congratulations, ${userName}!`);
};







