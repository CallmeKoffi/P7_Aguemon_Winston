const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')
const Jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/Register', userCtrl.signup);
router.post('/', userCtrl.login);

module.exports = router;