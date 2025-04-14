import { gameLogik, qwestionLogik, randomNum } from '../src/index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const progressStep = Math.round(Math.random() * 10, 0);
  const progressionLength = Math.round(Math.random() * 6, 0) + 5;
  const firstNumber = randomNum();
  const progression = [firstNumber];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressStep);
  }
  return progression;
};

const roundData = () => {
  const progression = getProgression();
  const randomIndex = Math.floor(Math.random() * progression.length);

  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  const string = progression.join(' ');

  const qwestionData = `${string}`;
  const userAnswer = Number(qwestionLogik(qwestionData));
  return [userAnswer, rightAnswer];
};

export default () => {
  gameLogik(roundData, gameDescription);
};
