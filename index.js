const bodyParser = require("body-parser");
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

//app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./routes/index')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});

