/**
 * calculator.js
 * Node.js CLI calculator supporting four basic arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (*)
 *   - Division       (/)
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> <num2>
 *
 * Operations: add, subtract, multiply, divide
 *
 * Examples:
 *   node src/calculator.js add 3 5        → 8
 *   node src/calculator.js subtract 10 4  → 6
 *   node src/calculator.js multiply 3 7   → 21
 *   node src/calculator.js divide 10 2    → 5
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b. Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;

  if (!operation || rawA === undefined || rawB === undefined) {
    console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
    console.error('Operations: add, subtract, multiply, divide');
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both operands must be valid numbers');
    process.exit(1);
  }

  const ops = { add, subtract, multiply, divide };

  if (!ops[operation]) {
    console.error(`Unknown operation: "${operation}"`);
    console.error('Operations: add, subtract, multiply, divide');
    process.exit(1);
  }

  try {
    const result = ops[operation](a, b);
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
