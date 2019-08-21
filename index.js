// const express = require('express')
// const app = express()
// const port = 8080

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))




// setup express server

var express = require('express');
var app = express();
var port = 8080;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index', {
        // đường dẫn và object
        name: 'anh duc'

    });
});

app.get('/users', function(req,res){
    res.render('users/index', {
      users: [
           { id: 1, name: 'anh duc'},
           { id: 2, name: 'anh duc 2'}

        //    chú ý dâu = và đấu :
       ]
    });
});

app.listen(port, function(){
    console.log('server listening port ' + port);
})

//template engine pug, ejs, mustache

// trang chủ pugjs.org 
//pughtml.com



