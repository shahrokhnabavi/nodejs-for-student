const axios = require('axios');

const {
  num1,
  second,
  operator
} = require('./inputValidator');
const {calculator} = require("./calculator");

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
