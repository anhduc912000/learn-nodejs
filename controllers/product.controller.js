const shortid = require('shortid');

const db = require('../db');

module.exports.index = function(req, res){
    let page = parseInt(req.query.page) || 1;
    let perPage = 8;
    let start = (page - 1)*perPage;
    let end = page*perPage;

    let drop = (page -1 )* perPage;

    res.render('product/index', {
        // products: db.get('products').value().slice(0,8);
        products: db.get('products').drop(drop).take(perPage).value()
    });
}
module.exports.search = function(req, res){
    let q = req.query.product;
    let products = db.get('products').value();
    let matchedProduct =  products.filter(function(product){
        return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('product/index', {
        products: matchedProduct
    })
}

