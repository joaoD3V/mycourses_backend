const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/LessonController');
const AdministratorController = require('../controllers/AdministratorController');
const ModulesController = require('../controllers/ModulesController');
const TokenController = require('../controllers/TokenController');
const loginRequired = require('../middlewares/loginRequired');

router.post('/api/lesson', loginRequired, LessonController.createLesson);
router.get('/api/lesson/:id', loginRequired, LessonController.listLesson);
router.get('/api/lesson', LessonController.listLessons);
router.put('/api/lesson/:id', loginRequired, LessonController.updateLesson);
router.delete('/api/lesson/:id', loginRequired, LessonController.deleteLesson);

router.post('/api/administrator', loginRequired, AdministratorController.createAdministrator);
router.get('/api/administrator/:id', loginRequired, AdministratorController.listAdministrator);
router.get('/api/administrator', loginRequired, AdministratorController.listAdministrators);
router.put('/api/administrator/:id', loginRequired, AdministratorController.updateAdministrator);
router.delete('/api/administrator/:id', loginRequired, AdministratorController.deleteAdministrator);

router.post('/api/module', loginRequired, ModulesController.createModule);
router.get('/api/module/:id', loginRequired, ModulesController.listModule);
router.get('/api/module', ModulesController.listModules);
router.put('/api/module/:id', loginRequired, ModulesController.updateModule);
router.delete('/api/module/:id', loginRequired, ModulesController.deleteModule);

router.get('/api/lesson/module/:id', LessonController.listModuleLessons);


router.post('/api/token', TokenController.createToken);




module.exports = router;