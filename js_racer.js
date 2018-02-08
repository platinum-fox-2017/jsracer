"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players 
    this.length = length 
    this.charPlayer = this.savePlayer()
    this.frontRacer = 0
  }
  savePlayer(){ // simpan karakter sebagai objek
    var racer = 'abcdefghijklmnopqrstuvwxyz';
    var charPlayer = [];
    for(var c=0; c<this.players; c++){
      var objChar = {}
      objChar.name = racer[c]
      objChar.pos = 0
      charPlayer.push(objChar);
    }
    return charPlayer;
  }

  print_board() { // ngeprint banyak player
    for(var b=0; b<this.charPlayer.length; b++){
      let racerName = this.charPlayer[b].name;
      let racerPosition = this.charPlayer[b].pos; // + Math.floor(Math.random()*3);
      this.print_line(racerName, racerPosition);
      this.charPlayer[b].pos += Math.ceil(Math.random()*5);
    }
  }
  
  print_line(player, pos) { // print panjang track
    var track = [];
    for(var i=0; i<this.length+1; i++){
      if(i === pos){
        track.push(player);
      } else {
        track.push('_');
      }
    }
    console.log(track.join('|'));
  }

  moveOn(){
    var max;
    // for(var t=0; t<4; t++){
    while(this.frontRacer <= this.length-1){
      var speed = [];
      for(var q=0; q<this.charPlayer.length; q++){
        var racersName = this.charPlayer[q].name;
        var racersPosition = this.charPlayer[q].pos;
        this.charPlayer[q].pos += Math.ceil(Math.random()*5);
        if(this.charPlayer[q].pos >= this.length-1){
          this.charPlayer[q].pos = this.length-1;
        }
        this.print_line(racersName, racersPosition);
        // tampung nilai pos masing
        speed.push(racersPosition);
      }
      max = Math.max(...speed);
      this.frontRacer = max;
      console.log('Nilai Max = ' + max + ' Pangjang Race = ' + this.length);
      console.log(speed);
    }
    console.log('--->' + this.frontRacer);
  }
  finished() {
    
  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;



