const shortid = require('shortid');

const db = require('../db');

// user
module.exports.index = function(req,res){
    res.render('users/index', {
        users: db.get('users').value()
    });
}

module.exports.search = function(req, res){
    let q = req.query.q;
    let users = db.get('users').value();
    let matchedUsers =  users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    })
}

module.exports.create = function(req, res){
    res.render('users/create');
}

module.exports.getId =  function(req, res){
    var id = req.params.id;
    var user = db.get('users').find({ id: id}).value();
    res.render('users/view', {
        user: user
    })
}

module.exports.get = function(req, res){
   
    let id = req.params.id;
    let user = db.get('users').find({id: id}).value();
    // console.log(user)
    res.render('users/view', {
        user: user
    });
 }
module.exports.postCreate = function(req, res){
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.slice(7);
    db.get('users').push(req.body).write();
    res.redirect('/users');
}


