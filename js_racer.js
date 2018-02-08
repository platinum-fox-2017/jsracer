"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = this.create_players(players)
    this.length = length
    this.dice = new Dice(3)
    this.obstacle = '*'
    this.booster = '$'
  }

  create_players(player) {
    let bank = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     let box = []
     for (let i = 0; i < player; i++) {
         let obj = {
             nama: bank[i],
             posisi: 0,
             obstacle: Math.round(Math.random() * 29),
             booster: Math.round(Math.random() * 29)
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
    console.log(player);
    for (let i = 0; i < this.length; i++) {
        if (i === pos) {
            box.push(player.nama)
        } else {
          if (i === player.obstacle) {
            box.push(this.obstacle)
            this.obstacle_generator()
          } else if (i === player.booster) {
            box.push(this.booster)
            this.booster_generator()
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

  obstacle_generator() {
      for (let i = 0; i < this.players; i++) {
          if (i === this.players[i].obstacle) {
              this.players[i].posisi = 0
              console.log(`Sayang sekali ${this.players[i].nama}, kamu kena jebakan betmen`)
          }
      }
  }

  booster_generator() {
      for (let i = 0; i < this.players; i++) {
          if (i === this.players[i].booster) {
              this.players[i].posisi += 5
              console.log(`Hoki ya kamu ${this.players[i].nama}, bisa dapat booster`)
          }
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
