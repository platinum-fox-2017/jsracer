"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    let listOfName = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.players = []
    this.distance = length
    this.board = []
    this.pemenang
    this.isFinished = false
    for (var i = 0; i < players; i++) {
      let pemain = {}
      pemain.name = listOfName[i],
      pemain.pos = 0
      let random = Math.ceil(Math.random()*(this.distance-5))
      let random2 = Math.ceil(Math.random()*(this.distance-5))
      pemain.power_up = random
      pemain.rintangan = random2
      this.players.push(pemain)
    }
  }


  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  print_board() {
    this.board = []
    for(let i=0;i<this.players.length;i++){
      this.board.push(this.print_line(this.players[i]).join(' | '))
      this.advanced_player(this.players[i])
      this.finished(this.players[i].name, this.players[i].pos)
    }
      console.log(`====`.repeat(this.distance));
      console.log(this.board.join('\n'));
      console.log(`====`.repeat(this.distance));
      console.log('');
      if(this.pemenang){
        this.winner()
    }
  }

  print_line(player) {
    let line = []
    for(let i = 0;i<=this.distance;i++){
      if(player.pos === i){
        line[i]=player.name
      } else if(player.power_up === i){
        line[i]='>'
      } else if(player.rintangan === i){
        line[i]='*'
      } else {
        line[i]=' '
      }
    }
    return line
  }

  advanced_player(player) {
    let dice = new Dice(2)
    if(this.isFinished === false){
        if(player.pos === player.power_up){
          player.pos += 3
          console.log(`${player.name} dapat power up`);
        } else if (player.pos === player.rintangan){
          player.pos -= 3
          console.log(`${player.name} kamu sedang sial mundur 3 langkah`);
        } else {
          player.pos += dice.roll()
        }
      }
    }

  finished(player,pos) {
    if(pos >= this.distance-1){
      this.isFinished = true
      this.pemenang = player
      pos = this.distance-1
    }
  }
  winner() {
    console.log(`pemenangnya adalah ${this.pemenang}`)

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
const race = new JSRacer(3,15)
console.log(race.players);
module.exports = JSRacer;
