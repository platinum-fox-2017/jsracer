"use strict"

class Dice {
  constructor(num) {
    this.num = num
  }
  roll() {
    let random = Math.ceil(Math.random() * this.num)
    return random
  }
}

module.exports = Dice;
