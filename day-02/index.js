const Submarine = require("./submarine");
const input = require("./input");

const submarine = new Submarine();

for (i = 0; i < input.length; i++) {
  const line = input[i].trim().split(" ");
  const value = +line.pop();
  const command = line[0];

  submarine[command](value);
}

console.log(submarine.multiplyPosition())
