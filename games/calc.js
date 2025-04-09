import readlineSync from 'readline-sync';
import gameLogik from '../src/index.js';

const gameDescription = 'What is the result of the expression?';

const ask = () => {
  const number1 = Math.round(Math.random() * 100, 0);
  const number2 = Math.round(Math.random() * 100, 0);
  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const sign = arr[randomIndex];

  const qwestion = readlineSync.question(`Question: ${number1} ${sign} ${number2}\nYour answer: `);
  const answer = Number(qwestion);
  let rightAns = 0;

  switch (sign) {
    case '+': rightAns = number1 + number2;
      break;

    case '-': rightAns = number1 - number2;
      break;

    case '*': rightAns = number1 * number2;
      break;

    default: rightAns = null;
  }

  return [answer, rightAns];
};

export default () => {
  gameLogik(ask, gameDescription);
};
