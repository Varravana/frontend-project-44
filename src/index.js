import cli from './cli.js';
import readlineSync from 'readline-sync';

const qwestionLogik = (qwestionData) => {
  const qwestion = readlineSync.question(`Question: ${qwestionData}\nYour answer: `);
  return qwestion;
};

const randomNum = () => { return Math.round(Math.random() * 100, 0); };

const gameLogik = (roundData, gameDescription) => {
  const userName = cli();
  console.log(gameDescription);

  let counter = 0;
  while (counter < 3) {
    const [userAnswer, rightAnswer] = roundData();
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { gameLogik, qwestionLogik, randomNum };
