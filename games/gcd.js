import readlineSync from 'readline-sync';
import gameLogik from '../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const ask = () => {
  const number1 = Math.round(Math.random() * 100, 0);
  const number2 = Math.round(Math.random() * 100, 0);
  let rightAns = 1;

  const qwestion = readlineSync.question(`Question: ${number1} ${number2}\nYour answer: `);
  const answer = Number(qwestion);

  for (let i = 1; i <= number1; i += 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      rightAns = i;
    }
  }

  return [answer, rightAns];
};

export default () => {
  gameLogik(ask, gameDescription);
};
