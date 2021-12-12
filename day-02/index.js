const Submarine = require("./submarine");
const SubmarineTheRightWay = require("./submarine-the-right-way")
const input = require("./input");

const submarine = new Submarine();
const submarineTheRightWay = new SubmarineTheRightWay();

for (i = 0; i < input.length; i++) {
  const line = input[i].trim().split(" ");
  const value = +line.pop();
  const command = line[0];

  submarine[command](value);
  submarineTheRightWay[command](value);
}

console.log("Part1", submarine.multiplyPosition())
console.log("Part2", submarineTheRightWay.multiplyPosition())

