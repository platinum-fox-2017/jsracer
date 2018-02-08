"use strict"

class Dice {
  constructor(digit) {
    this.digits=digit || 6
  }
  roll() {
    return 1+Math.floor(Math.random()*this.digits)
  }
}

module.exports = Dice;
