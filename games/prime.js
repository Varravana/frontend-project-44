import readlineSync from 'readline-sync';
import { gameLogik } from '../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const ask = () => {
  const number = Math.round(Math.random() * 100, 0);

  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  let rightAns = 'yes';

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      rightAns = 'no';
    }
  }

  return [answer, rightAns];
};

export default () => {
  gameLogik(ask, gameDescription);
};
