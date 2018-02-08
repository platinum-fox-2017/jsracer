"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.player = players;
    this.length = length;
  }

  print_board() {
    
    // CREATE PAPAN GABUNG
    for (var i = 0; i < this.player.length; i++) {
      this.print_line(this.player[i].nama, this.player[i].position); 
    }
  
  }

  print_line(player, pos) {
    
    // CREATE BARIS
    var track = [];

    for (var i = 0; i < this.length; i++) {
      if (pos == i) {
        track.push(player);
      } else {
        track.push(' ');      
      }
   
    }

    console.log(track.join('|'));

  }

  move_player(player) {
    
    // CREATE Penambahan hasil dari dadu
    for (var i = 0; i < this.player.length; i++) {
      if (this.player[i].nama == player) {
        var MyDice = new Dice().roll();
        this.player[i].position += MyDice;
        if (this.player[i].position >= this.length) {
          this.player[i].position = this.length-1;
        }
      }
      
    }       
 
  }

  finished() {

    for (var i = 0; i < this.player.length; i++) {
      // console.log('===3', this.player[i].position);
      if (this.player[i].position >= this.length-1) {
        return true;
      }
    }
    return false;
  }

  winner() {
    
    for (var i = 0; i < this.player.length; i++) {
      if (this.player[i].position == this.length-1) {
        console.log(`Selamat ${this.player[i].nama} ! Anda Menang !`);
      } 
    }

  }


  reset_board() {
    console.log("\x1B[2J")
  }
}


// console.log(player.print_line(2,2));
// player.print_board();
// console.log(player.move_player());




module.exports = JSRacer;
