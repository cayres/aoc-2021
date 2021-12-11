const { reducer, sumThreeMeasurement} = require("./index")

const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("day 01: given the input [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]", () => {
  test("the number of measurement are larger than previous should be 7", () => {
    const result = input.reduce(reducer, 0);
    expect(result).toBe(7)
  })

  test("the sum of a three measurement sliding window to the first index is 618",() => {
    const firstValueSum = sumThreeMeasurement(input, 0);

    expect(firstValueSum).toBe(607)
  })
});