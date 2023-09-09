const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

const userController = new UserController();

router.post('/create', userController.createUser);

module.exports = router;
