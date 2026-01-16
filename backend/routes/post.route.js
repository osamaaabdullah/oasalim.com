const express = require('express');
const router = express.Router();
const {getPostById, postPost, updatePost, deletePost} = require('../controller/post.controller.js')
const {authMiddleware} = require('../middleware/auth.middleware.js');

router.get('/:id', getPostById);
router.post('/', authMiddleware, postPost);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);

module.exports = router;