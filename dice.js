"use strict"

class Dice {
  constructor() {

  }
  roll() {
    var ranDice=[1,2,3,4,5,6];
    return ranDice[Math.floor(Math.random() * ranDice.length)];
  }
}
//var newDice= new Dice();
//console.log(newDice.roll);
module.exports = Dice;
