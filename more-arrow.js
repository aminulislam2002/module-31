const add = (first, second) => first + second;
const fullName = (first, last) => first + " " + last;
const multiply = (a, b) => a * b;
const addAll = (a, b, c, d, e) => a + b + c + d + e;

// No parameter on arrow funtion
const getPie = () => 3.1416;

// One parameter
const doubleIt = (num) => num * 2;

// One oarameter simple version
// const fiveTimes = num1 => num1 * 5;

// Multi Line arrow function
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = x + y;
  const multiplyResult = firstSum * secondSum;
  const result = multiplyResult / 2;
  return result;
};
