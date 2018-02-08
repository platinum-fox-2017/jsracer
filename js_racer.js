"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = this.create_players(players, length)
    this.length = length
    this.dice = new Dice(3)
    this.obstacle = '*'
    this.booster = '$'
  }

  test() {
    console.log(Math.round(Math.random() * Number(this.length-1)));
  }

  create_players(player, length) {
    let bank = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     let box = []
     // console.log(this.length,'<<<<<<<<<<<<<<<<<<<<');
     for (let i = 0; i < player; i++) {
         let obj = {
             nama: bank[i],
             posisi: 0,
             obstacle: Math.round(Math.random() * Number(length-1)),
             booster: Math.round(Math.random() * Number(length-1))
         }
         box.push(obj)
     }
     return box
  }

  print_board() {
    let board = []
    for (let i = 0; i < this.players.length; i++) {
        board.push(this.print_line(this.players[i], this.players[i].posisi))
    }
    return board
  }

  print_line(player, pos) {
    let box = []
    for (let i = 0; i < this.length; i++) {
        if (i === pos && i !== player.obstacle && i !== player.booster) {
            box.push(player.nama)
        } else {
          if (i === player.obstacle) {
            box.push(this.obstacle)
            this.obstacle_generator(player.posisi, player.obstacle, player.nama)
          } else if (i === player.booster) {
            box.push(this.booster)
            this.booster_generator(player.posisi, player.booster, player.nama)
          } else {
            box.push(' ')
          }
        }
    }
    return box.join('|')
  }

  advanced_player(player) {
    for (let i = 0; i < this.players.length; i++) {
        this.players[i].posisi += this.dice.roll()
    }
    return this.print_board()
  }

  obstacle_generator(pos, obstacle, player) {
    if(pos === obstacle) {
        pos = 0
        console.log(`Sayang sekali ${player}, kamu kena jebakan betmen`)
      }
  }

  booster_generator(pos, booster, player) {
    if(pos === booster) {
      pos += 5
      console.log(`Hoki ya kamu ${player}, bisa dapat booster`)
    }
  }

  finished() {
    for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].posisi >= this.length - 1) {
                this.champion = this.players[i].nama
                return true
            }
        }
        return false
  }

  winner() {
    console.log(`Congratulations ${this.champion}!! You are the winner of this race!!`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}


module.exports = JSRacer;
