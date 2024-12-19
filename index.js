var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hi Iam Ayush " }');
});

app.get('/done', function (req, res) {
    res.send('{ "response": "This is a Nodeapp" }');
});
app.get('/result', function (req, res) {
    res.send('{ "response": " Assignment from better is completed" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
