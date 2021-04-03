const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { request, response } = require('express');

router.post('/api/users', UserController.createUser);
router.get('/api/users', UserController.listUsers);
router.get('/api/user', UserController.listUser);

module.exports = router;