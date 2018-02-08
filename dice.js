"use strict"

class Dice {
  constructor() {

  }
  roll() {
    var random = Math.floor(Math.random()*5);
    if(random === 0){
      return 1;
    } else {
      return random;
    }
  }
}

module.exports = Dice;

