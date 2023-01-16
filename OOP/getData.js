const [, , operation, ...data] = process.argv;

const numbers = data.map((elem) => Number(elem));

module.exports = { operation, numbers };
