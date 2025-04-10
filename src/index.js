import cli from './cli.js';

const gameLogik = (intoo, gameDescription) => {
  const userName = cli();
  console.log(gameDescription);

  let counter = 0;
  while (counter < 3) {
    const [answer, rightAns] = intoo();
    if (answer === rightAns) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAns}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameLogik;
