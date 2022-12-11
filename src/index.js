const axios = require('axios');

const {
  num1,
  second,
  operator
} = require('./inputValidator');
const { error } = require("./library");

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

console.log(
  calculator(num1, second, operator)
);


console.log('-----------------------------------------');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
