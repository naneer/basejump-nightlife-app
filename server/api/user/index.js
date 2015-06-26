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

goingRouter.get('/:saloon_id', goingController.index);
goingRouter.get('/:saloon_id/count', goingController.count);
goingRouter.get('/:saloon_id/check', auth.isAuthenticated(), goingController.check);
goingRouter.put('/:saloon_id/add', auth.isAuthenticated(), goingController.create);
goingRouter.put('/:saloon_id/remove', auth.isAuthenticated(), goingController.destroy);

module.exports = router;
