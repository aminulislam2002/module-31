const max = Math.max(12, 15, 20);
console.log(max);

// Get largest number from a Array use ...
const numbers = [100, 125, 30, 90, 150, 120, 50];
const largest = Math.max(...numbers);
console.log(largest);

/* // Wrong Way 
const num1 = [10, 20, 30, 40];
const num2 = num1;
num1.push(50);
num2.push(60);
console.log(num1);
console.log(num2); */

// Right Way
const num1 = [10, 20, 30, 40];
const num2 = [...num1];
num1.push(50);
num2.push(60);
console.log(num1);
console.log(num2);

const num3 = [...num1];

const num4 = [400, ...num1, 555, 1000];
