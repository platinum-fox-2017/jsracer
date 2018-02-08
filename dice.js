"use strict"

class Dice {
  constructor() {
    
  }
  roll() {
    let diceNum = Math.floor((Math.random() * 6) + 1);
    return diceNum
  }
}

module.exports = Dice;
