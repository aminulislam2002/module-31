function add(first, second) {
  const total = first + second;
  return total;
}
const result = add(10, 20);
console.log(result);
// default parammeter on function
function sum(normalParameter, defaultParameter = 10) {
  const total1 = normalParameter + defaultParameter;
  return total1;
}
const total1 = sum(10);
console.log(total1);
