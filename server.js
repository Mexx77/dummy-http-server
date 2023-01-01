var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.text())

app.use('*', function (req, res) {
  console.log(req.body);
  res.json({status: 'OK'});
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Dummy server listening on port ' + port);
});
