const Submarine = require("./submarine-the-right-way")

describe("submarine aim", () => {
  it("given the submarine when the submarine forward by 5 your position should be (5,0)", () => {
    const submarine = new Submarine();
    submarine["forward"](5)
    expect(submarine.position).toBe("(5,0)")
  })

  it("given the submarine with position (5,0) when the submarine down by 5 your position should be (5,0)", () => {
    const submarine = new Submarine();
    submarine["forward"](5)
    submarine["down"](5)
    expect(submarine.position).toBe("(5,0)")
  })

  it("given the submarine with position (5,5) when the submarine forward by 8 your position should be (13,40)", () => {
    const submarine = new Submarine();
    submarine["forward"](5)
    submarine["down"](5)
    submarine["forward"](8)
    expect(submarine.position).toBe("(13,40)")
  })

  it("given the submarine when the submarine navigate with exampleDirections your multiply position should be 900", () => {
    const submarine = new Submarine();
    submarine["forward"](5)
    submarine["down"](5)
    submarine["forward"](8)
    submarine["up"](3)
    submarine["down"](8)
    submarine["forward"](2)
    expect(submarine.position).toBe("(15,60)")
    expect(submarine.multiplyPosition()).toBe(900)
  })

  const exampleDirections = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2"
  ]

})