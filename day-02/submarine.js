module.exports = class Submarine {
  #depth = 0;
  #horizaontalPosition = 0;

  constructor(){}

  forward(x) {
    this.#horizaontalPosition += x;
  }

  backward(x) {
    this.#horizaontalPosition -= x;
  }

  down(y) {
    this.#depth += y;
  }

  up(y) {
    this.#depth -= y;
  }

  get position(){
    return `(${this.#horizaontalPosition},${this.#depth})`;
  }

  multiplyPosition(){
    return this.#depth * this.#horizaontalPosition;
  }
}