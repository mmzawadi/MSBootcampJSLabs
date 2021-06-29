import  { GoogleBookService }  from '../GoogleBookService.mjs';
import anyNameIWant from 'axios';

describe("GoogleBookService", function () {
  var googleBookService;

  beforeEach(function () {
    googleBookService = new GoogleBookService();
  });

  it("should have a url property set to value https://www.googleapis.com/books/v1/volumes?q=", function () {
    var results = googleBookService.url
    expect(results).toBe('https://www.googleapis.com/books/v1/volumes?q=')
  });

  it("should have a fetchedResults property set to equal []", function () {
    var results = googleBookService.fetchedResults
    expect(results).toEqual([])
  });

  it("should have a __axios property set to equal axios npm import", function () {
    const __axios = googleBookService.__axios
    expect(__axios).toEqual(anyNameIWant)
  });

  describe("fetchBooks method", function () {
    var testObject = {data: {"test": "testington"}};
    beforeEach(function () {
      const promisedResults = new Promise((resolve, reject) => { resolve(testObject); });
      spyOn(googleBookService, '__axios').and.callFake(function () {
        return promisedResults;
      });
    });

    it(`should call __axios with 'https://www.googleapis.com/books/v1/volumes?q=test' when fetchBooks is called with 'test' `, async function () {
      const res = await googleBookService.fetchBooks("test")
      expect(googleBookService.__axios).toHaveBeenCalledWith("https://www.googleapis.com/books/v1/volumes?q=test");
    });

    it("should return the data property from the promised json response from __axios when fetchBooks is called", async function () {
      const res = await googleBookService.fetchBooks("test")
      expect(res).toEqual(testObject.data)
    });

    it("should set the value of fetchedResults to the the data property from the promised json response from __axios when fetchBooks is called", async function () {
      const res = await googleBookService.fetchBooks("test")
      expect(googleBookService.fetchedResults).toEqual(testObject.data)
    });

    it("should set the value of fetchedResults to the the data property from the promised json response from  __axios when fetchBooks is called", async function () {
      googleBookService.fetchBooks("test")
        .then((result) => {
          expect(googleBookService.fetchedResults).toEqual(testObject.data)
        });
    });

    it("should use the parameter value in fetchBooks as the query term q in the call to axios", function () {
      googleBookService.fetchBooks("test")
      expect(googleBookService.__axios).toHaveBeenCalledWith("https://www.googleapis.com/books/v1/volumes?q=test");
    });

  })

});

