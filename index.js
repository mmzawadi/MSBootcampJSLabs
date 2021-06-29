console.log("It's ALive!");
var Player = require('./lib/jasmine_examples/Player');
var Song = require('./lib/jasmine_examples/Song');
var GoogleBook = require('./googlebook.js');

var googlebook = new GoogleBook();
var song = new Song();
var player = new Player();
player.play(song);
player.pause();
player.resume();
googlebook.googleBookItemMapper(null)
// player.makeFavorite();



