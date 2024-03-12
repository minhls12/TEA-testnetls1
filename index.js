// Helper function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Helper function to subtract two numbers
function subtractNumbers(num1, num2) {
  return num1 - num2;
}

// Helper function to multiply two numbers
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

// Helper function to divide two numbers
function divideNumbers(num1, num2) {
  return num1 / num2;
}

// Main function to perform the operation
function calculateProduct(x, y) {
  const product = multiplyNumbers(x, y);
  return product;
}

// Example of usage:
const number1 = 6;
const number2 = 9;
const product = calculateProduct(number1, number2);

console.log(`${number1} * ${number2} = ${product}`);
