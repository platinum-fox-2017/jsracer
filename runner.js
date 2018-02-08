"use strict"

const JSRacer = require('./js_racer')

function racer(jumlahpemain,panjangrute){
  var hurufmobil= 'abcdefghijklmnopqrstuvwxyz'
  var namemobil=[]
  var pos=[]
  for(let i=0;i<jumlahpemain;i++){
    namemobil.push(hurufmobil[i])
    pos.push(0)
  }
  var my_jsracer= new JSRacer(namemobil,panjangrute,pos)
  my_jsracer.print_board()
  console.log()
  my_jsracer.move(my_jsracer.player)
  my_jsracer.winner()

}
var myargv=process.argv
racer(myargv[2],myargv[3])



// my_jsracer.print_board()
// my_jsracer.print_line(my_jsracer.nameplayer,0)
// my_jsracer.advanced_player(my_jsracer.player)
// console.log(my_jsracer)
// Your code here...
