import readlineSync from 'readline-sync';

export default () => {
let number = Math.round(Math.random()*100,0);

const iseven = (number) => {
        let count = number%2;
        let result = '';
        if (count === 0) {
            result = 'yes'
        } else {result = 'no'};
        return result;
    };

const rightAns = iseven(number);

const answer = readlineSync.question('Question: '+ number + '\nYour answer: ');


if (answer === rightAns){
        console.log ('Correct!');
        return true;
    } else {
        console.log('"'+ answer + '"'+ ' is wrong answer ;(. Correct answer was ' + '"' + rightAns + '".');
        return false;
    };
}