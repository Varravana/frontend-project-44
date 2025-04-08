import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const userName = cli();

console.log('What is the result of the expression?');
