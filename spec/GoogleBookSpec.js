describe("GoogleBook", function () {
    const GoogleBookConstructorFunction = require('../GoogleBook');
    const googleBookItemCatStub = require('../GoogleBookItem');
    let myGoogleBook
  
    beforeEach(function () {
       myGoogleBook = new GoogleBookConstructorFunction();
    });
  
    it("the description field should default to a description", function () {
      const description = myGoogleBook.description
      expect(description).toBe('A description')
    });
    it("the title field should default to a title", function () {
      const title = myGoogleBook.title
      expect(title).toBe('A title')
    });
    it("the author field should default to a Author", function () {
      const author = myGoogleBook.author[0]
      expect(author).toBe('A author')
    });
    it("the publishedDate field should default to a year", function () {
      const publishedDate = myGoogleBook.publishedDate
      expect(publishedDate).toBe('A year')
    });
    it("the thumbNail field should default to a thumbnail", function () {
      const publishedDate = myGoogleBook.thumbnail
      expect(publishedDate).toBe('A thumbnail')
    });

    describe("googleBookItemMapper", function () {
      beforeEach(function () {
        const res =  myGoogleBook.googleBookItemMapper(googleBookItemCatStub)
      });
  
      it("should have the title property after googleBookItemMapper is called with googleBookItemCatStub  be 'I Could Pee on This' ",  function () {
        const title = myGoogleBook.title
        expect(title).toBe('I Could Pee on This')
      });
      it("should have the author[0] property after googleBookItemMapper is called with the googleBookItemCatStub be 'Francesco Marciuliano' ",  function () {
        const author = myGoogleBook.author
        expect(author[0]).toBe('Francesco Marciuliano')
      });
      it(`should have the description property after googleBookItemMapper is called with the googleBookItemCatStub be 'Francesco Marciuliano' "
          Cat lovers will laugh out loud at the quirkiness of their feline friends with these insightful and curious poems from the singular
          minds of housecats. In this hilarious book of tongue-in-cheek poetry, the author of the internationally syndicated comic strip
          Sally Forth helps cats unlock their creative potential and explain their odd behavior to ignorant humans.
          With titles like "Who Is That on Your Lap?, " "This Is My Chair, " "Kneel Before Me, " "Nudge, " and 
          "Some of My Best Friends Are Dogs, " the poems collected in I Could Pee on This perfectly capture the inner workings of the cat
          psyche. With photos of the cat authors throughout, this whimsical volume reveals kitties at their wackiest, and most exasperating
          (but always lovable).`,  function () {
        const description = myGoogleBook.description
        expect(description).toBe('Cat lovers will laugh out loud at the quirkiness of their feline friends with these insightful and curious poems from the singular minds of housecats. In this hilarious book of tongue-in-cheek poetry, the author of the internationally syndicated comic strip Sally Forth helps cats unlock their creative potential and explain their odd behavior to ignorant humans. With titles like "Who Is That on Your Lap?, " "This Is My Chair, " "Kneel Before Me, " "Nudge, " and "Some of My Best Friends Are Dogs, " the poems collected in I Could Pee on This perfectly capture the inner workings of the cat psyche. With photos of the cat authors throughout, this whimsical volume reveals kitties at their wackiest, and most exasperating (but always lovable).');
      });
      it("should have publishedDate property after googleBookItemMapper is called with googleBookItemCatStub be 2012-08-03' ",  function () {
        const publishedDate = myGoogleBook.publishedDate
        expect(publishedDate).toBe('2012-08-03')
      });
  
      it("should have thumbnail property after googleBookItemMapper is called with googleBookItemCatStub be http://books.google.com/books/content?id=Cy8nyLknYLIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' ",  function () {
        const res =  myGoogleBook.googleBookItemMapper(googleBookItemCatStub)
        const thumbnail = myGoogleBook.thumbnail
        expect(thumbnail).toBe('http://books.google.com/books/content?id=Cy8nyLknYLIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
      });
  
    })
  
  });
  
  