const express = require('express');
const router = express.Router();
const {getPostById, postPost, updatePost, deletePost} = require('../controller/post.controller.js')

router.get('/:id', getPostById);
router.post('/', postPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;