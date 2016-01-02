var expect = require("chai").expect;

var urlmeta = require("../src/urlmeta.js");

describe('Error', function() {

	it('when empty string is passed', function(){
		urlmeta('', function(err, res) {
			expect(err).to.not.equal(undefined);
			expect(res).to.equal(undefined);
		});
	});

	it('when empty object is passed', function(){
		urlmeta({}, function(err, res) {
			expect(err).to.not.equal(undefined);
			expect(res).to.equal(undefined);
		});
	});

	it('when object or string is not passed', function(){
		urlmeta(undefined, function(err, res) {
			expect(err).to.not.equal(undefined);
			expect(res).to.equal(undefined);
		});
	});

	it('when invalid URL is passed', function(){
		urlmeta('http://', function(err, res) {
			expect(err).to.not.equal(undefined);
			expect(res).to.equal(undefined);
		});
	});

	it('when unsupported protocol is passed', function(){
		urlmeta('ftp://urlmeta.org', function(err, res) {
			expect(err).to.not.equal(undefined);
			expect(res).to.equal(undefined);
		});
	});

});

describe('Response', function() {

	it('should be an object for http', function(done){
		urlmeta('http://urlmeta.org', function(err, res) {
			expect(err).to.equal(undefined);
			expect(res).to.be.an('object');
			done();
		});
	});

	it('should be an object for https', function(done){
		urlmeta({
			url: 'https://urlmeta.org',
			onlyHead: true
		}, function(err, res) {
			expect(err).to.equal(undefined);
			expect(res.result.onlyHead).to.equal(true);
			done();
		});
	});

	it('should be error object for url without protocol', function(done){
		urlmeta({
			url: 'urlmeta.org',
			onlyHead: true
		}, function(err, res) {
			expect(err).to.not.equal(undefined);
			expect(res).to.equal(undefined);
			done();
		});
	});

	it('should be onlyHead when onlyHead=true is passed', function(done){
		urlmeta({
			url: 'https://urlmeta.org',
			onlyHead: true
		}, function(err, res) {
			expect(err).to.equal(undefined);
			expect(res.result.onlyHead).to.equal(true);
			done();
		});
	});

});