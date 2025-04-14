import { gameLogik, qwestionLogik, randomNum } from '../src/index.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (number1, number2, sign) => {
  let resultOfCalculation = 0;
  switch (sign) {
    case '+': resultOfCalculation = number1 + number2;
      break;

    case '-': resultOfCalculation = number1 - number2;
      break;

    case '*': resultOfCalculation = number1 * number2;
      break;

    default: resultOfCalculation = null;
  }
  return resultOfCalculation;
};

const roundData = () => {
  const number1 = randomNum();
  const number2 = randomNum();

  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const sign = arr[randomIndex];

  const qwestionData = `${number1} ${sign} ${number2}`;

  const userAnswer = Number(qwestionLogik(qwestionData));
  const rightAnswer = calculate(number1, number2, sign);

  return [userAnswer, rightAnswer];
};

export default () => {
  gameLogik(roundData, gameDescription);
};
