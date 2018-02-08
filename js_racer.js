"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.racers = this.createPlayer();

  }
  print_board() {
    var playersArray = this.racers; 
    for(var i = 0; i < playersArray.length; i++){
     this.print_line(playersArray[i].name,playersArray[i].position);   
     if(!this.finished()){
       this.advanced_player(i);
     }
    }
  }
  roll() {
    let  possible = "123456";
    let  text = possible.charAt(Math.floor(Math.random() * possible.length));
    return Number(text);
  }
  print_line(player, pos) {
    var track = [];
    var isPlayerTampil = false;
    for(var i = 0; i < this.length; i++){
      if((pos === i && pos < this.length) ){
        track[i - 1] = '|';
        track.push(player);  
        isPlayerTampil = true;
      } else {
        track.push('| ');  
      }
    }
      if(isPlayerTampil === false ){
        track[i - 1] = player;
        track[i - 2] = '|';
        isPlayerTampil = true;
      }
    console.log(track.join(''));

  }
  advanced_player(player) {
    var newPosition = this.roll();
     this.racers[player].position += newPosition;
  }
  finished() {
      var players = this.racers;
      for(var i = 0; i < players.length; i++){
        if(players[i].position === this.length || players[i].position > this.length){
          return true;  
        }
      }
      return false;

  }
  winner() {
    var players = this.racers;
      for(var i = 0; i < players.length; i++){
        if(players[i].position === this.length || players[i].position > this.length){
          return `Player '${players[i].name}' is the winner`;  
        }
      }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
  createPlayer(){
    let playersArray = [];
    for(var i = 0; i < this.players; i++){
         var  playerName = this.playerName();
         playerName = this.checkDuplicateName(playerName,playersArray);
         playersArray.push({ name: playerName, position: 0})
    }
    return playersArray;
  }
  checkDuplicateName (playerName,playersArray){
         for(var j = 0; j < playersArray.length; j++){
            if(playersArray[j].name === playerName ){
             var playerNameBaru = this.playerName();   
             while(playerNameBaru === playerName){
               playerNameBaru = this.playerName();  
             }
             playerName = playerNameBaru;
             return playerName;
            }
         }
         return playerName;
  }

  playerName(){
    let  possible = "abcdefghijklmnopqrstuvwxyz";
    let  text = possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}


module.exports = JSRacer;
