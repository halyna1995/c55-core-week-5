import { describe, test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js"; 
describe("calculateAverage", () => {
  test("returns average for a normal array [2,4,6] -> 4", () => {
    // Arrange
    const numbers = [2, 4, 6];
    // Act
    const result = calculateAverage(numbers);
    // Assert
    expect(result).toBe(4);
  });
  test("returns the number itself for a single-item array [5] -> 5", () => {
    const numbers = [5];
    const result = calculateAverage(numbers);
    expect(result).toBe(5);
  });
  test("returns null for an empty array", () => {
    const result = calculateAverage([]);
    expect(result).toBeNull();
  });
  test("returns null for non-array input (string)", () => {
    const result = calculateAverage("123");
    expect(result).toBeNull();
  });
  test("returns null for non-array input (null)", () => {
    const result = calculateAverage(null);
    expect(result).toBeNull();
  });
  test('returns null if array contains a non-number value [1,2,"3"]', () => {
    const result = calculateAverage([1, 2, "3"]);
    expect(result).toBeNull();
  });
});
