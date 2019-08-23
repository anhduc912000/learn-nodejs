// require các thư viện cần thiết

var express= require('express');
var bodyParser = require('body-parser')

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
app.set('views', './views');

// setup body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

// query parameter

app.get('/users/search', function(req, res){
    var q= req.query.q;
    var nameSearch = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })

    res.render('users/index', {
        users: nameSearch
    })
})

//post method
    // b1 tao 1 route end-point get để tạo đường dẫn tới trang create
    //b2 tạo 1 template create.pug trong users
    //b3 tao end point post để nhận dữ liệu từ trang create
    //b4 cài một plug in body-parser để nhận dữ liệu
    //b5 setup body parser
    //b6 tạo ra một id và lưu vào array đẩy dữ liệu nhận được vào data user
    //b7 validate
    // b8 redirect sang trang chủ
app.get('/users/create', function(req, res){
    res.render('users/create')
})
   
app.post('/users/create', function(req, res){
    users.push(req.body);
    res.redirect('/users/index');
    // console.log(req.body)
})

//listen port 
app.listen(port, function(){});