// node timer_clean.js 2 4 6

const secondsArray = process.argv.slice(2);
const timer = function(secondsArray) {
  const onlyNumbers = secondsArray.every(element => !isNaN(element));
  if (!onlyNumbers) {
    console.log("The timer only works with a number");
  } else {
    console.log(secondsArray);
    secondsArray.forEach((secondsArray) => {

      let time = (secondsArray * 1000);

      setTimeout(() => {
        process.stdout.write("\x07"), console.log(`${secondsArray} second timer ended`);
      }, time);
    });
  }
};
timer(secondsArray);