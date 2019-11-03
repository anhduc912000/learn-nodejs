// console.log(process.env)
// console.log(process.env.SESSION_SECRET)
require('dotenv').config();


const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const userRoute = require('./routes/users.routes');
const authRoute = require('./routes/auth.router');
const productRoute = require('./routes/product.router');

const authMiddleware = require('./middlewares/auth.middleware')

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

app.use(cookieParser(process.env.SESSION_SECRET))

app.get('/', function(req, res){
 res. render('index', {
     name: 'Anh đức'
 });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);

app.listen(port, function(){})