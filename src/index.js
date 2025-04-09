import cli from '../src/cli.js'

const gameLogik = (intoo, gameDescription) => {
  const userName = cli();
  console.log (gameDescription);
    
  let counter = 0;
  while (counter < 3 ) {
    let [answer, rightAns] = intoo();
    if (answer === rightAns){
      console.log ('Correct!');
      counter ++;
    } else {
      console.log('"'+ answer + '"'+ ' is wrong answer ;(. Correct answer was ' + '"' + rightAns + '".'); 
      console.log(`Let\'s try again, ${userName}!`); 
      break
    }
  }
  if (counter === 3) {
  console.log(`Congratulations, ${userName}!`)
}; 
};

export { gameLogik };