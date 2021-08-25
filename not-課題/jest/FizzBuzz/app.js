const toFizzBuzz = require('./modules/fizzbuzz');

const repeatFizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
}

module.exports = repeatFizzBuzz;