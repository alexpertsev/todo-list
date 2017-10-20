var request = require('supertest');
var app = require('./app');

describe('root path', function() {
	it('returns 200', function(done) {
		request(app).get('/').expect(200, done)
	})

	it('returns HTML', function(done) {
		request(app).get('/').expect('Content-Type', /html/, done)
	})
	
	it('returns shopping categories', function(done) {
		request(app).get('/').expect(/shopping categories/i, done)
	})
});

// [ category_name : [item1, item2, ...], ... ]
describe('listing /categories', function() {
	it('returns 200', function(done) {
		request(app).get('/categories').expect(200, done)
	})

	it('returns JSON', function(done) {
		request(app).get('/categories')
			.expect('Content-Type', /json/, done)
	})

	it('returns initial categories', function(done) {
		request(app).get('/categories')
			.expect(JSON.stringify({
				'Dairy': ['Milk', 'Eggs', 'Yogurt']
			}), done)
	})
});
