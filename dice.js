"use strict"

class Dice {
  constructor() {

  }
  roll() {
    let result = (Math.floor(Math.random() * Math.floor(6)))+1;
    return result;
  }
}

module.exports = Dice;
