"use strict"

class Dice {
  constructor() {

  }
  roll() {
    var angkaRandom = Math.round(Math.random()*6);
    if (angkaRandom == 0) {
      return 1;
    } else {
      return angkaRandom;
    }

  }
}

// var myDice = new Dice();
// console.log(myDice.roll());


module.exports = Dice;
