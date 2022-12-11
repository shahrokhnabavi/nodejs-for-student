const { error } = require('./library');

if (process.argv.length != 5) {
  error('Please enter two numbers and one operator');
}

const first = Number(process.argv[2]);
if (isNaN(first)) {
  error(`first argument should be number. The value is: ${process.argv[2]}`);
}

const second = Number(process.argv[3]);
if (isNaN(second)) {
  error(`second argument should be number. The value is: ${process.argv[3]}`);
}

const operator = process.argv[4];
const validOperators = ['+', '-', 'x', '/'];

const opString = validOperators.join('\', \'');

if (!validOperators.includes(operator)) {
  error(`operator should be one of '${opString}'. The value is : ${operator}`);
}

module.exports = {
  operator,
  num1: first,
  second
}
