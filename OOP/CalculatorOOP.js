class CalculatorOOP {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }

  getResult = (op, arr) => {
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

  init = () => {
    return this.getResult(this.operation, this.numbers);
  };
}

module.exports = CalculatorOOP;
