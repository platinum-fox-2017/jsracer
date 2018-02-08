"use strict"

const JSRacer = require('./js_racer')

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function getPlayer(number, length) {
	var result = [];
	for (var i = 0; i < number; i++) {
		var obj = {
			name: String.fromCharCode(97 + i),
			position: 0,
			powerUp: Math.floor(Math.random() * (length - 2)) + 1,
			obstacle: Math.floor(Math.random() * (length - 2)) + 1
		};
		result.push(obj);
	}
	return result;
}

// Your code here...
var input_argv = process.argv;

if (input_argv[2] < 2) console.log('Jumlah minimal pemain adalah 2!');
else if (input_argv[3] < 15) console.log('Panjang lintasan paling sedikit adalah 15!');
else {
	var players = getPlayer(input_argv[2], input_argv[3]);
	var jsRacer = new JSRacer(players, input_argv[3]);

	while(!jsRacer.finished()) {
		jsRacer.reset_board();
		for (var i = 0; i < players.length; i++) {
			jsRacer.move(players[i].name);
			if (jsRacer.finished()) break;
		}
		jsRacer.print_board();
		sleep(2000);
	}

	jsRacer.winner();
}

// console.log(players);