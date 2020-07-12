var express = require('express');
var boydyParser = require('body-parser');
var exprhbr = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT);
});