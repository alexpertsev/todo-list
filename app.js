var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/categories', function(req, res) {
	res.json({'Dairy':['Milk','Eggs','Yogurt']});	
})

module.exports = app;