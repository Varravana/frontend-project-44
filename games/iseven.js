import readlineSync from 'readline-sync';

import {gameLogik} from '../src/index.js';



const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

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
        gameLogik(ask, gameDescription);
};