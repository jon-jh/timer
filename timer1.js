// example: node timer1.js 10 3 5 15 9
// to make the timer beep: process.stdout.write("\x07");
// break down the problem
// 1. this should take user input from the command line. So, when the user inputs node timer1.js 3, it should start a timer for 3 secondsArray and beep afterwards.

// 1. First thing: make the standard timer that works with one argument and no user input.

// 1.1 user input: process.argv[2] (this is generally the command to take the user input if called like node timer.js 10)
// 1.2 process.argv.slice(2) gets all the values after 2 which is better.

// 2. since the input will be an array, we can use forEach to place a function on each item in the array.

const secondsArray = process.argv.slice(2); //take the input from terminal



const timer = function(secondsArray) {
  if (secondsArray <= 0 || secondsArray === "") {
    console.log("HELLO THERE!!! THE TIMER NEEDS A POSITIVE NUMBER!");
  } else {
    console.log(secondsArray); // verify secondsArray is now an array
    secondsArray.forEach((secondsArray) => {

      let time = (secondsArray * 1000);

      setTimeout(() => {
        process.stdout.write("\x07"), console.log(`${secondsArray} second timer ended`);
      }, time);
    });
  }
};

timer(secondsArray);