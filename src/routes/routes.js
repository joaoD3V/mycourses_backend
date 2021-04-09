const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { request, response } = require('express');
const RecepieController = require('../controllers/RecepieController');
const CategoryController = require('../controllers/CategoryController');

router.post('/api/users', UserController.createUser);
router.get('/api/users', UserController.listUsers);
router.get('/api/user', UserController.listUser);

router.post('/api/recepies', RecepieController.createRecepie);
router.get('/api/recepies', RecepieController.listRecepies);
router.patch('/api/recepies', RecepieController.updateRecepie);

router.get('/api/recepies-search', RecepieController.listRecepieSearchName);

router.delete('/api/recepie-information', RecepieController.deleteRecepie);
router.get('/api/recepie-information', RecepieController.listRecepie);

router.get('/api/categories', CategoryController.listCategories);


module.exports = router;