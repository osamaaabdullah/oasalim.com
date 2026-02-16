const express = require('express');
const router = express.Router();
const {getPosts} = require('../controllers/posts.controller.js')

router.get('/', getPosts);

module.exports = router;