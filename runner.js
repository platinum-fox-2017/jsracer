"use strict"

const JSRacer = require('./js_racer')


let argv = process.argv

let command = argv.slice(2,argv.length)

let release = new JSRacer(Number(command[0]),Number(command[1]))
release.createBoard()

while(!release.isFinished){
  release.printBoard()
}

release.findWinner()
