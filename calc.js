//sum, sub, mult, div
//node calc.js sum 3 2 3
//node calc.js mult 3 2 3
// console.log(process.argv);
const [, , operation, ...data] = process.argv;
console.log(operation);
const numbers = data.map((elem) => Number(elem));
console.log(numbers);

const getResult = (op, arr) => {
  let result = null;
  switch (op) {
    case "sum":
      result = arr.reduce((acc, elem) => acc + elem);
      break;
    case "sub":
      result = arr.reduce((acc, elem) => acc - elem);
      break;
    case "mult":
      result = arr.reduce((acc, elem) => acc * elem);
      break;
    case "div":
      result = arr.reduce((acc, elem) => acc / elem);
      break;

    default:
      result = "unknown operation type";
      break;
  }
  return result;
};

console.log(getResult(operation, numbers));
