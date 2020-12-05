var createError = require('http-errors');
var express = require('express');
var path = require('path');


var app = express();


const clientApp = path.join(__dirname, '../client/build', 'index.html')
app.use(express.static(clientApp)) //TESt build

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello World From NODE Express!' });
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});


module.exports = app;
