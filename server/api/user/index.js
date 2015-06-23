'use strict';

var express = require('express');
var controller = require('./user.controller');
var goingController = require('./going/going.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();
var goingRouter = express.Router({mergeParams: true});

router.use('/going', goingRouter);

router.get('/', auth.hasRole('user'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

goingRouter.get('/', goingController.index);
goingRouter.put('/:saloon_id', auth.isAuthenticated(), goingController.create);
goingRouter.put('/:saloon_id/cancel', auth.isAuthenticated(), goingController.destroy);

module.exports = router;
