"use strict"

class Dice {
  constructor() {

  }
  roll() {
    let random = Math.ceil(Math.random()*2);
    return random;
  }
}

module.exports = Dice;
