const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.post('/register',auth, userCtrl.register);
router.post('/login',userCtrl.login);
router.get('/profile/:id',auth, userCtrl.getUserProfile);
router.get('/profile/:id',auth, userCtrl.deleteUserProfile)

module.exports = router;

