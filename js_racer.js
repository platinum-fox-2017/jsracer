"use strict"

/*
  Maju seperti biasa, apa bila bertemu #, player akan skipped 1 round.
*/

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.arrPlayers = new Array();
    this.length = length;
    this.players = players;
    this.boardArray = new Array();
    this.dice = new Dice();
    this.gameEnd = false;
    this.diceResult = 0;

    for (let i = 0; i < this.players; i++) {
      let tempArray = new Array();
      let tempObject = new Object();

      for (let j = 0; j < this.length; j++) {
        tempArray.push(" ");
      }

      this.boardArray.push(tempArray);
      tempObject.name = String.fromCharCode('a'.charCodeAt() + i);
      tempObject.position = 0;
      tempObject.trap = 1+Math.floor(Math.random()*(this.length-3));
      let tempRand = 1+Math.floor(Math.random()*(this.length-3));
      while(tempRand==tempObject.trap){
        tempRand = 1+Math.floor(Math.random()*(this.length-3));
      }
      tempObject.trap2 = tempRand;
      tempObject.trapHit = false;
      tempObject.trap2Hit = false;
      this.arrPlayers.push(tempObject);
    }
  }

  print_board(player,display=true) {
    console.log("Dice Output for player "+this.arrPlayers[player].name+": "+this.diceResult);
    for (let i = 0; i < this.players; i++) {
      this.print_line(i, this.arrPlayers[i].position);
    }
  }

  print_line(player, pos) {
    if(this.arrPlayers[player].trapHit==false)
      this.boardArray[player][this.arrPlayers[player].trap] = "#";
    else
      this.boardArray[player][this.arrPlayers[player].trap]=" ";
    if(this.arrPlayers[player].trap2Hit==false)
      this.boardArray[player][this.arrPlayers[player].trap2] = "*"
    else
      this.boardArray[player][this.arrPlayers[player].trap2]=" ";

    this.boardArray[player][0] = " ";
    this.boardArray[player][pos] = this.arrPlayers[player].name;
    console.log("|" + this.boardArray[player].join("|") + "|");
  }

  run_player(player) {
    this.diceResult = this.dice.roll();
    this.boardArray[player][this.arrPlayers[player].position] = " ";

    this.arrPlayers[player].position += this.diceResult;
    if (this.arrPlayers[player].position >= this.length - 1) {
      this.finished(player);
    }
    if(this.boardArray[player][this.arrPlayers[player].position]=="#"){
      this.arrPlayers[player].position -=2;
      if(this.arrPlayers[player].position<0)
        this.arrPlayers[player].position = 0;
      this.arrPlayers[player].trapHit = true;

      console.log("Sorry, you hit obstacle. Move backwards 2 :(");
    }
    if(this.boardArray[player][this.arrPlayers[player].position]=="*"){
      this.arrPlayers[player].position +=2;
      this.arrPlayers[player].trap2Hit = true;
      console.log("Yeah! You have got powerup! Move forwards 2!");

    }
  }


  finished(player) {
    this.arrPlayers[player].position = this.length-1;
    this.gameEnd = true;
  }

  winner(player) {
    console.log("\n\nPlayer " + this.arrPlayers[player].name + " win the game!\n\n");
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
