var request = require('supertest');
var app = require('./app');

describe('root path', function() {
	it('returns 200', function(done) {
	   request(app).get('/')
		           .expect(200)
		           .end(function(error) {
					   if (error) throw error;
					   done();
		           }) 
	})
})