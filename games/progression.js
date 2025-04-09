import readlineSync from 'readline-sync';
import {gameLogik} from '../src/index.js';

const gameDescription = 'What number is missing in the progression?';

const ask = () => {
    let progressStep = Math.round(Math.random()*10,0);
    let arrLength = Math.round(Math.random()*6) + 5;
    let firstNumber = Math.round(Math.random()*100,0);
    const randomIndex = Math.floor(Math.random() * arrLength); 
    const arr = [firstNumber];
    
    for (let i = 1; i < arrLength; i ++){
        arr.push(arr[i-1] + progressStep)
    };


let rightAns = arr[randomIndex];
    arr[randomIndex] = '..';

    let string = arr.join(' ');



    const qwestion = readlineSync.question(`Question: ${string}\nYour answer: `);
    const answer = Number(qwestion);
    return [answer, rightAns];
};

export default  () => {
        gameLogik(ask, gameDescription);
};