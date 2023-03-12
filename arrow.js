// Function declaration
function add(first, second) {
  const total = first + second;
  return total;
}
const result = add(10, 20);
console.log(result);

// Function Expression
const add1 = function add1(first, second) {
  const total1 = first + second;
  return total1;
};

// Function Expression with anonymous function
const add2 = function (first, second) {
  const total2 = first + second;
  return total2;
};

function add3(first, second) {
  return first + second;
}

const add4 = function (first, second) {
  return first + second;
};

// This is arrows function
const add5 = (first, second) => first + second;
const result5 = add5(10, 20);
console.log(result5);
