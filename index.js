// require các thư viện cần thiết

var express= require('express');

// đặt tên biến
var app= express();
var port= 8080;

var users = [
    {id: 1, name: 'anh duc'},
    {id: 2, name: 'sugi'}
]

// require template engine pug.js
    // b1 set thư viện pug
    // b1 tạo thư mục views và file index trong thư viện
app.set('view engine', 'pug');
app.set('views', './views')

// tạo route
app.get('/', function(req, res){

    // có 2 method send để gửi string và render để trả về file html
//  res.send('<h1>hello</h1>');
res.render('index',{
    name: 'anhduc' // chú í dấu : 
} );
// bao gồm đường dẫn tới file pug muốn hiển thị và một object
})

app.get('/users', function(req, res){
    res.render('users/index', {
        users: users
    })
})

//listen port 
app.listen(port, function(){
    console.log('server is listening on port ' + port)
});