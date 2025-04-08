import readlineSync from 'readline-sync';
import cli from '../src/cli.js';
import index from '../src/index.js';

const userName = cli();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => {
    let count = number%2;
    let result = '';
    if (count === 0) {
        result = 'yes'
    } else {result = 'no'};
    return result;
};

const ask = () => {
let number = Math.round(Math.random()*100,0);
const rightAns = isEven(number);
const answer = readlineSync.question('Question: '+ number + '\nYour answer: ');
return [answer, rightAns];
};







export default  () => {

let counter = 0;
while (counter <3) {
    let result = index(ask());
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

}