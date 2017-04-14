var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models');
var controllers = require('./controllers');

app.use(express.static('public'));

app.get('/', function homepage(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.api.index);

app.get('/api/albums', functionName);

function functionName(req, res) {};







app.listen(3000);