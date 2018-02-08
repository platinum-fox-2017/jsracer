"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.length = length
    this.tempPlayer = this.create_player()
  }
  create_player(){
    let tempPlayer = [];
    let dict = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<this.players; i++){
      let obj = {
        name : dict[i],
        position : 0,
        obstacle : Math.round(Math.random()*this.length-1),
        powerUp : Math.round(Math.random()*this.length-1),
      }
      tempPlayer.push(obj);
    }
    return tempPlayer;
  }

  print_board() {
    let result = [];
    for(let i=0; i<this.players; i++){
      let track = [];

      for(let j=0; j<this.length; j++){
        track.push(' ');
      }
      track[this.tempPlayer[i].position]=(this.tempPlayer[i].name);

      track[this.tempPlayer[i].obstacle] = '*'
      this.obstacle()

      track[this.tempPlayer[i].powerUp] = '>'
      this.powerUp()

      this.advance_player(this.tempPlayer[i]);

      result.push(track.join('|'));
    }
    return result;

  }

  advance_player(player) {
    // console.log(player);
    let dice1 = new Dice();
    player['position'] += dice1.roll();
  }

  finished() {
    for(let i=0; i<this.players; i++){
      if(this.tempPlayer[i].position > this.length){
        console.log('congrats ma boy, '+this.tempPlayer[i].name+'....');
        return false;
      }
    }
    return true;
  }

  reset_board() {
    console.log("\x1B[2J")
  }
  new_line(){
    for(let i=0; i<50; i++){
      console.log();
    }
  }

  obstacle() {
    for(let i=0; i<this.players; i++){
      if(this.tempPlayer[i].position === this.tempPlayer[i].obstacle){
        this.tempPlayer[i].position = 0;
        console.log('Player '+this.tempPlayer[i].name+' terciduq!');
      }
    }
  }

  powerUp() {
    for(let i=0; i<this.players; i++){
      if(this.tempPlayer[i].position === this.tempPlayer[i].powerUp){
        this.tempPlayer[i].position += 3;
        console.log('Player '+this.tempPlayer[i].name+' terciduq!');
      }
    }
  }

}

module.exports = JSRacer;
