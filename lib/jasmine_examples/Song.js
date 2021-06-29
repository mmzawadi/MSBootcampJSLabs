function Song() {
  this.isFavorite = false;
}

Song.prototype.persistFavoriteStatus = function(value) {
  this.isFavorite = value
};

module.exports = Song;
