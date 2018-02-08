"use strict"

class Dice {
  constructor() {
   
  }
  roll() {
    return Math.ceil(Math.random()*6)
  }
}

module.exports = Dice;
