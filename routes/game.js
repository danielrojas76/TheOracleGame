var express = require('express');
var router = express.Router();
let gameController = require("../controllers/gameController");

router.get('/', gameController.game)
router.post('/respuesta', gameController.result);


module.exports = router;