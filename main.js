

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('static_data'));
//app.set('port', (process.env.PORT || defaultPort));


app.listen(50001,function() {
    console.log('Node app is running on port 50001');
});

// app.listen(app.get('port'), function() {
//     console.log('Node app is running on port', app.get('port'));
// });