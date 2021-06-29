const x = require("regenerator-runtime");

console.log("It's ALive!");
var Player = require('./lib/jasmine_examples/Player');
var Song = require('./lib/jasmine_examples/Song');
var GoogleBook = require('./googlebook.js');
var googleBookSvc = require ('./dist/GoogleBookService.js');
const googleBookItemCatStub = require('./GoogleBookItem');



var googlebook = new GoogleBook();
var song = new Song();
var player = new Player();
player.play(song);
player.pause();
player.resume();
googlebook.googleBookItemMapper(googleBookItemCatStub)
// player.makeFavorite();

const service = new googleBookSvc.GoogleBookService();
service.fetchBooks("Cats");
setTimeout(function(){ console.log(service.fetchedResults); }, 1000);

module.exports = {googleBookSvc, GoogleBook}



