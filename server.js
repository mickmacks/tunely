var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models');

app.use(express.static('public'));


app.get('/', function homepage(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});








app.listen(3000);