// Object distructuring
const fish = {
  name: "King Hilsha",
  address: "River",
  color: "Selver",
  price: 1000,
};
/* // Wrong Way
const fishPrice = fish.price;
const fishName = fish.name;
const fishColor = fish.color;
const fishAddress = fish.address;
console.log(fishPrice);
console.log(fishName);
console.log(fishColor);
console.log(fishAddress); */
// Right Way
const { name, address, color, price } = fish;
console.log(name);
console.log(price);

const { names, addresses, prices, mobile } = {
  names: "Aminul Islam",
  addresses: "Bangladesh",
  prices: 100000,
  mobile: 017100,
};
console.log(mobile);
console.log(names);

// Array distructuring
const [first, second, third] = [10, 20, 30];
console.log(first, second, third);

const [fName, lName] = ["Aminul", "Islam"];
console.log(fName, lName);

const fullName = ["Aminul", "Islam"];
const [startName, endName] = fullName;
console.log(startName, endName);

function getName() {
  return ["MA", "BABA"];
}
const [ma, baba] = getName();
console.log(ma, baba);
