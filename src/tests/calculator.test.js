/**
 * calculator.test.js
 * Comprehensive unit tests for the four basic arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (*)
 *   - Division       (/)
 *
 * Image-derived examples used as baseline test cases:
 *   2 + 3 = 5  |  10 - 4 = 6  |  45 * 2 = 90  |  20 / 5 = 4
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add()', () => {
  // Baseline example from image
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds a positive and a negative number', () => expect(add(10, -4)).toBe(6));
  test('adds two negative numbers', () => expect(add(-5, -3)).toBe(-8));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds two zeros', () => expect(add(0, 0)).toBe(0));
  test('adds floating-point numbers', () => expect(add(1.5, 2.5)).toBeCloseTo(4.0));
  test('adds large numbers', () => expect(add(1_000_000, 2_000_000)).toBe(3_000_000));
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract()', () => {
  // Baseline example from image
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('result is negative when b > a', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number (effectively adds)', () => expect(subtract(5, -3)).toBe(8));
  test('subtracts two negative numbers', () => expect(subtract(-4, -2)).toBe(-2));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts same numbers to yield zero', () => expect(subtract(7, 7)).toBe(0));
  test('subtracts floating-point numbers', () => expect(subtract(5.5, 2.5)).toBeCloseTo(3.0));
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply()', () => {
  // Baseline example from image
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies a positive and a negative number', () => expect(multiply(4, -3)).toBe(-12));
  test('multiplies two negative numbers (positive result)', () => expect(multiply(-4, -3)).toBe(12));
  test('multiplying by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies floating-point numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10.0));
  test('multiplies large numbers', () => expect(multiply(1_000, 1_000)).toBe(1_000_000));
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide()', () => {
  // Baseline example from image
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive numbers', () => expect(divide(10, 2)).toBe(5));
  test('divides resulting in a fraction', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides a negative number by a positive', () => expect(divide(-12, 4)).toBe(-3));
  test('divides a positive by a negative number', () => expect(divide(12, -4)).toBe(-3));
  test('divides two negative numbers (positive result)', () => expect(divide(-12, -4)).toBe(3));
  test('divides zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));
  test('divides a number by one returns the same number', () => expect(divide(9, 1)).toBe(9));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
  test('throws an error when dividing a negative number by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
  });
});
