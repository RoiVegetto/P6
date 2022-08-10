const express = require('express');
const router = express.Router();
const like = require("../controllers/like")

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post("/:id/like", autentification, likeFicheUser);

module.exports = router;