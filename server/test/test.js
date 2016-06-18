var Blog = require('../models/blog/blog');

var should=require("chai").should(),
    expect=require("chai").expect,
    assert=require("chai").assert,
    supertest=require("supertest"),
    app=require('../server');

var url=supertest("http://localhost:8080");

describe('blog creation', function() {
    var testBlog;

    beforeEach(function() {
        testBlog = new Blog();
    });

    it('should have a title attribute a', function(){
        expect(testBlog.title).toBeDefined();
    });

    it('should have a null title ccc', function() {
        expect(testBlog.title).toBeNull();
    });

    it('should set the title', function() {
        testBlog.setTitle('dummy');
        expect(testBlog.title).toMatch('dummy');
    });

});

//Testing the Get JSON API
describe("Testing the GET Blog File",function(err)
{
  it("should handle the request and read the JSON",function(done)
  {
      url
        .get("/api/blogs")
        .expect(200)
        .expect('Content-type',/json/)
        .end(function(err,res)
        {
          if(err)
          {
            throw err;
          }
          var jsonobj=JSON.parse(res.text);
          expect('jsonobj').to.exist;
          done();
        });
  });
});





