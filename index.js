const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/users.routes');

const port = 3000;

const app = express();

//set up template engine
app.set('view engine', 'pug');
app.set('views', './views');

//setup body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
 res. render('index', {
     name: 'Anh đức'
 });
});

app.use('/users', userRoute);

app.listen(port, function(){})