module.exports = class SubmarineTheRightWay {
  #depth = 0;
  #horizaontalPosition = 0;
  #aim = 0;

  constructor(){}

  forward(x) {
    this.#horizaontalPosition += x;
    this.#depth += this.#aim * x;
  }

  backward(x) {
    this.#horizaontalPosition -= x;
    this.#depth -= this.#aim * x;
  }

  down(y) {
    this.#aim += y;
  }

  up(y) {
    this.#aim -= y;
  }

  get position(){
    return `(${this.#horizaontalPosition},${this.#depth})`;
  }

  multiplyPosition(){
    return this.#depth * this.#horizaontalPosition;
  }
}