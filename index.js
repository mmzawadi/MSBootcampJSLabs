console.log("It's ALive!");
var Player = require('./jasmine_examples/Player');
var Song = require('./jasmine_examples/Song');
var song = new Song();
var player = new Player();
player.play(song);
player.pause();
player.resume();
player.makeFavorite();



