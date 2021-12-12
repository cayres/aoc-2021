const Submarine = require("./submarine")

describe.only("submarine forward", () => {
  it("when the submarine forward by 5 your position should be (5,0)", () => {
    const submarine = new Submarine();
    submarine["forward"](5)
    expect(submarine.position).toBe("(5,0)")
  })

  it("given the submarine forward by 5 when forward more 10 then your position should be (15,0)", () => {
    const submarine = new Submarine();
    submarine["forward"](5)
    submarine["forward"](10)
    expect(submarine.position).toBe("(15,0)")
  })
})

describe.only("submarine down", () => {
  it("when the submarine down by 5 your position should be (0,5)", () => {
    const submarine = new Submarine();
    submarine["down"](5)
    expect(submarine.position).toBe("(0,5)")
  })

  it("given the submarine down by 5 when down more 10 then your position should be (0,15)", () => {
    const submarine = new Submarine();
    submarine["down"](5)
    submarine["down"](10)
    expect(submarine.position).toBe("(0,15)")
  })
})

describe.only("submarine up", () => {
  it("given the submarine down 100 when the submarine down by 5 your position should be (0,95)", () => {
    const submarine = new Submarine();
    submarine["down"](100)
    submarine["up"](5)
    expect(submarine.position).toBe("(0,95)")
  })

})