"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    
    this.players =[]
    this.length = length
    this.is_finished = false
    this.champion = 'Dennis'

    let player_list ='123456789';
    for(let i=0; i<players; i++){
      let object = {};
      object.name = player_list[i];
      object.position = 0;
      object.obstacle = Math.floor(Math.random()*this.length);
      this.players.push(object);
    }

  }
  print_board() {
    let outside =[];
    for(let i=0; i<this.players.length; i++){
      console.log(`Position: `, this.players[i].position);
      console.log(`Obstacle :`, this.players[i].obstacle);
      outside.push(this.print_line(this.players[i]));
      this.hit(this.players[i]);
      this.advanced_player(this.players[i]);
      this.reset_board();
      
    }
    console.log('=================================JS RACER=============================')
    console.log (outside);
    console.log('=================================JS RACER=============================')
  }
  print_line(player) {
    let outside =[];
    for(let i=0; i<this.length; i++){
      if(player.position == i){
        outside.push(player.name + '| ');
      } else if(player.obstacle === i) {
        outside.push(' * ')
      } else {
        outside.push(' | ');
      }
    }
    return outside.join('');
  }
  advanced_player(player) {
    let newDice = new Dice;
     player.position += newDice.roll();
  }
  finished() {
    for(let i=0; i< this.players.length; i++){
      if(this.players[i].position > this.length-1){
        this.champion = this.players[i];
        return this.finished = true;
      }
    }
   
  }
  winner(player) {
      console.log ('\n'+'THE GAME HAS ENDED. '+'\n'+'\n' +'THE WINNER IS PLAYER '+ this.champion.name+'. \n');
  }
  reset_board() {
    console.log("\x1B[2J")
  }
  hit(player){
    if(player.position === player.obstacle){
      console.log('Extra Boost!');
      player.position += 4;
    }
  }
}


module.exports = JSRacer;
