const {error} = require("./library");

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case 'x':
      return num1 * num2;
    default:
      error('Undefined operation.');
  }
}

module.exports = {
  calculator
}
