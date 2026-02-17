import { describe, test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js"; 
describe("calculateAverage", () => {
  test("returns average for a normal array [2,4,6] -> 4", () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  };
  
  test("returns the number itself for a single-item array [5] -> 5", () => {
    expect(calculateAverage([5])).toBe(5);
  };
    
  test("returns null for an empty array", () => {
    expect(calculateAverage([])).toBeNull();
  };
    
  test("returns null for non-array input (string)", () => {
    expect(calculateAverage("123")).toBeNull();
  };
    
  test("returns null for non-array input (null)", () => {
    expect(calculateAverage(null)).toBeNull();
  };
    
  test('returns null if array contains a non-number value [1,2,"3"]', () => {
    expect(calculateAverage([1, 2, "3"])).toBeNull();
  });
});
