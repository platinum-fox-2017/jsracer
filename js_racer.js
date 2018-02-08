"use strict"

const Dice = require('./dice');
var diceResult = new Dice()

class JSRacer {
  constructor(players,length,obstacle) {
    this.player = this.player_info(players)
    this.length = length
    this.finish = false
    this.obstacle = obstacle
  }

  player_info(players){
    let listPlayer = ['A','B','C','D','E','F','G','H','I','J']
    let playerInfo = []
    for(let i=0; i<players; i++){
      let objPlayer = {
      name : listPlayer[i],
      position : 0,
      }
    playerInfo.push(objPlayer)
    }
    return playerInfo
  }

  print_board() {
    var board = []
    for(let i=0; i<this.player.length; i++){
      board.push(this.print_line(this.player[i].name,this.player[i].position))
      this.advanced_player(this.player[i])
      this.finished(this.player[i].position, this.player[i].name)

    }
    return board.join('\n')
  }

  print_line(player,pos) {
    var lineLen = []
    for(let i=0; i<this.length; i++){
      if(pos === i){
        lineLen.push(`|${player}`)
      }
      else if(i === this.obstacle.position){
        lineLen.push('|#')
      }
      else{
        lineLen.push('| ')
      }
    }
    return lineLen.join('')
  }

  advanced_player(player) {
    player.position += diceResult.roll()
    if(player.position === this.obstacle.position){
      player.position -= 5
    }
  }

  finished(position,name) {
    if(position >= this.length-1){
      this.finish = true
      this.winner(name)
    }
  }

  winner(name) {
    console.log('THE WINNER IS ' + name)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

//const argv_race = process.argv
//var js_racing = new JSRacer(argv_race[2],argv_race[3])
//js_racing.player_pos()

//console.log(js_racing.print_board())
//console.log(this.playerinfo)
//console.log(diceResult.roll)

module.exports = JSRacer;
