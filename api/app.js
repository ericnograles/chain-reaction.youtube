var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');

var app = connect();
app.use(bodyParser.json());


app.use('/memes', function memeController(req, res, next) {
  var payload = {
    data: [
      'http://www.multipelife.com/wp-content/uploads/2015/06/create-http-server-with-nodejs.png'
    ]
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type,accept");
  res.end(JSON.stringify(payload))
});

http.createServer(app).listen(3000);
console.log('chain-reaction.api started on port 3000');