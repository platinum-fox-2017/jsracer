"use strict"

class Dice {
  constructor() {

  }
  roll() {
    let  possible = "123456";
    let  text = possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}


module.exports = Dice;
