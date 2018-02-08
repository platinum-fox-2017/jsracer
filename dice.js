"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.round(Math.random()*3);
  }
}

module.exports = Dice;
