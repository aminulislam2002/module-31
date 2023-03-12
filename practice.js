/* 1) Write an arrow function that will take 3 parameters, will multiply
 the parameters and will return the result. */
const add01 = (first, second, third) => first * second * third;
const result01 = add01(5, 5, 5);
console.log(result01);
/* 2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */
const thereLines = `
I am a web developer.
I love to code.
I love to eat biriani`;
console.log(thereLines);

/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */
const linesAdded = (firstLine, secondLine = "My mother") => firstLine + secondLine;
const result02 = linesAdded("I love ");
console.log(result02);
/* Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. */
const friendsName = ["Aminul", "Mithun", "Miraj", "Tamima", "Ema", "Emon"];
let newArray = [];
const name = (names) => {
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (element.length % 2 === 0) {
      newArray.push(element);
    }
  }
  return newArray;
};
const result = name(friendsName);
console.log(result);
/** Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */
const numbers = [5, 10, 15, 20, 25];
const squreArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    return element;
  }
};
const result03 = squreArr(numbers);
console.log(result03);
