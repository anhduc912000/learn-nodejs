const express = require('express');
var multer  = require('multer')

const controller = require('../controllers/user.controller');

const validate = require('../validates/user.validate');

const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();

var upload = multer({ dest: './public/uploads/' })

router.get('/',authMiddleware.requireAuth, controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('users/:id', controller.getId);
router.get('/:id', controller.get)
router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 12345);
    res.send(' hello ');
} )
router.post('/create',
    upload.single('avatar'),
    validate.postCreate, 
    controller.postCreate
    );


module.exports = router;