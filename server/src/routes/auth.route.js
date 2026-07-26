const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/auth.controller.js')

// uncomment to enable signup route
// router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;