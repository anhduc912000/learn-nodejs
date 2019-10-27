const express = require('express');

const controller = require('../controllers/user.controller');

const validate = require('../validates/user.validate');

const router = express.Router();

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('users/:id', controller.getId);
router.get('/:id', controller.get)

router.post('/create', validate.postCreate, controller.postCreate);


module.exports = router;