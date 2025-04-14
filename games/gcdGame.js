import { gameLogik, qwestionLogik, randomNum } from '../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const foundGcd = (number1, number2) => {
  let result = 1;
  for (let i = 1; i <= number1; i += 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      result = i;
    }
  }
  return result;
};

const roundData = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const rightAnswer = foundGcd(number1, number2);

  const qwestionData = `${number1} ${number2}`;

  const userAnswer = Number(qwestionLogik(qwestionData));

  return [userAnswer, rightAnswer];
};

export default () => {
  gameLogik(roundData, gameDescription);
};
