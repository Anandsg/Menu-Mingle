import { sum } from "../../sum";

it("sum function should calculate sum of two numbers", () => {
    const result = sum(3, 2);

    // Assertion
    expect(result).toBe(5);
});