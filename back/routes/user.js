const express = require('express');
const router = express.Router();
const like = require("../controllers/like");
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post("/:id/like", auth, like.likeFicheUser);

module.exports = router;