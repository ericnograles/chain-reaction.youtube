var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');

var app = connect();
app.use(bodyParser.json());


app.use('/memes', function memeController(req, res, next) {
  var payload = {
    data: [
      'http://cdn.meme.am/instances/500x/13734123.jpg',
      'http://s2.quickmeme.com/img/6d/6d68ad25beab779467cf2e95c7c3de742f4df17ad4e38176a71886f566816424.jpg',
      'http://cdn.pophangover.com/wp-content/uploads/2013/12/mem2.png',
      'http://memesvault.com/wp-content/uploads/Best-Meme-03.jpg',
      'http://memesvault.com/wp-content/uploads/I-Have-No-Idea-What-Im-Doing-Dog-02.jpg'
    ]
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type,accept");
  res.end(JSON.stringify(payload))
});

http.createServer(app).listen(3000);
console.log('chain-reaction.api started on port 3000');