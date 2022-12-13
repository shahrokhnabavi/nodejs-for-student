const {calculator} = require("../../src/calculator");

test('Should see 5 as result of 2 plus 3', () => {
  expect(
    calculator(2, 3, '+')
  ).toBe(5);
});

test('Should see -1 as result of 2 minus 3', () => {
  expect(
    calculator(2, 3, '-')
  ).toBe(-1);
});

test('Should see 6 as result of 2 multiply 3', () => {
  expect(
    calculator(2, 3, 'x')
  ).toBe(6);
});

test('Should see 5 as result of 10 divide 2', () => {
  expect(
    calculator(10, 2, '/')
  ).toBe(5);
});
