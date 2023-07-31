var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', userController.home);

router.get('/createQuestion', userController.form);
router.post('/createQuestion', userController.create);

router.post('/gamer', userController.gamer);



module.exports = router;
