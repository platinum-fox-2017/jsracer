"use strict"

class Dice {
  constructor() {

  }
  roll(engine) {
    return Math.ceil(Math.random()*engine)
  }
  booster(length){
    return Math.ceil(Math.random()*length)
  }

  trap(length){
    return Math.ceil(Math.random()*length)
  }
}

module.exports = Dice;
