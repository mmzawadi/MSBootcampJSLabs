function GoogleBook() {
  this.description = "A description";
  this.title = "A title";
  this.thumbnail = "A thumbnail";
  this.author = ["A author"];
  this.publishedDate = "A year";
}

GoogleBook.prototype.googleBookItemMapper = function (googleBookItem) {
 this.description = googleBookItem.volumeInfo.description;
  this.title = googleBookItem.volumeInfo.title;
  this.author = googleBookItem.volumeInfo.authors;
  this.publishedDate = googleBookItem.volumeInfo.publishedDate;
  this.thumbnail = googleBookItem.volumeInfo.imageLinks.thumbnail;
}

module.exports = GoogleBook;