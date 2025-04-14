import { gameLogik, qwestionLogik, randomNum } from '../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = true;
  if (number < 2) {
    result = false;
  } else if (number === 2) {
    result = true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result;
};

const roundData = () => {
  const number = randomNum();

  const qwestionData = `${number}`;
  const userAnswer = qwestionLogik(qwestionData);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [userAnswer, rightAnswer];
};

export default () => {
  gameLogik(roundData, gameDescription);
};
