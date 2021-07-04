const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { request, response } = require('express');
const LessonController = require('../controllers/LessonController');
const AdministratorController = require('../controllers/AdministratorController');

router.post('/api/lesson', LessonController.createLesson);
router.get('/api/lesson/:id', LessonController.listLesson);
router.get('/api/lesson', LessonController.listLessons);
router.put('/api/lesson/:id', LessonController.updateLesson);
router.delete('/api/lesson/:id', LessonController.deleteLesson);

router.post('/api/administrator', AdministratorController.createAdministrator);
router.get('/api/administrator/:id', AdministratorController.listAdministrator);
router.get('/api/administrator', AdministratorController.listAdministrators);
router.put('/api/administrator/:id', AdministratorController.updateAdministrator);
router.delete('/api/administrator/:id', AdministratorController.deleteAdministrator);

// router.post('/api/recepies', RecepieController.createRecepie);
// router.get('/api/recepies', RecepieController.listRecepies);
// router.patch('/api/recepies', RecepieController.updateRecepie);

// router.get('/api/recepies-search', RecepieController.listRecepieSearchName);

// router.delete('/api/recepie-information', RecepieController.deleteRecepie);
// router.get('/api/recepie-information', RecepieController.listRecepie);

// router.get('/api/categories', CategoryController.listCategories);


module.exports = router;