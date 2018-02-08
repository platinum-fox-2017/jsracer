"use strict"

class Dice {
  constructor(digit) {
    this.digits=digit || 6
  }
  roll() {
    return Math.floor(1+Math.random()*this.digits)
  }
}

module.exports = Dice;
