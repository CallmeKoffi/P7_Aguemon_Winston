const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userPostCtrl = require('../controllers/post');

//Posts//
router.get('/', auth, userPostCtrl.getAllPost);
router.post('/', auth, userPostCtrl.newPost);
router.get('/:id', auth, userPostCtrl.getOnePost);
router.delete('/:id', auth, userPostCtrl.deleteOnePost);
router.put('/:id', auth, userPostCtrl.modifyOnePost);
router.get('/user:id/posts', auth, userPostCtrl.getUserPosts);

//Comments//
router.get('/:id/comments', auth, userPostCtrl.getAllComments);
router.post('/:id/comment/', auth, userPostCtrl.newComment);
router.delete('/comment/:id', auth, userPostCtrl.deleteComment);

module.exports = router;