"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players=this.listPlayer(players);
    this.length=length;
    this.dice= new Dice();

  }
print_board() {
  this.board = [];
  for(let i=0;i<this.players.length;i++){
    this.board.push(this.print_line(this.players[i].name, this.players[i].posisi));
  }
  return this.board.join("\n")
  }
  print_line(player, pos) {
    var lintasanArr=[];
    //  lintasanArr.push([]);
      for(let j=0;j<this.length;j++){
      lintasanArr.push('|');
        if(pos===j)
        {
            lintasanArr.push(player);
        }
      }

    return lintasanArr.join(' ');;
  }


    listPlayer(countPlayer) {
        let kamusPlayer= "abcdefghijklmnopqrstuvwxyz";
        let playerArr=[];
        for(let i = 0; i < countPlayer; i++){
        let obj = {
         name: kamusPlayer[i],
         posisi: 0
        }
        playerArr.push(obj);
      }
      return playerArr;
    }

  advanced_player() {
    var limit=0;
    while(limit<this.length){
      for(let i = 0;i<this.players.length;i++){
        this.players[i].posisi += this.dice.roll();
        limit =  this.players[i].posisi;
        if(this.players[i].posisi >= this.length - 1){
          this.players[i].posisi = this.length - 1
          this.winner = this.players[i].name
          break;
        }
        else {
          this.winner = ''
        }
      }
      this.reset_board();
      console.log(this.print_board());
      this.sleep(1000);
    }
      console.log('The Winner Is : '+this.winner);
  }


  finished() {
    return false;
  }
  winner() {
  return this.winner;
  }
  reset_board() {
    console.log("\x1B[2J")
  }

   sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
}

const args = process.argv;
var js_car=new JSRacer(args[2],args[3]);
var j=0;

js_car.advanced_player();


module.exports = JSRacer;
