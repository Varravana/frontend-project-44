import { gameLogik, qwestionLogik, randomNum } from '../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const roundData = () => {
  const number = randomNum();
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const qwestionData = `${number}`;
  const userAnswer = qwestionLogik(qwestionData);
  return [userAnswer, rightAnswer];
};

export default () => {
  gameLogik(roundData, gameDescription);
};
