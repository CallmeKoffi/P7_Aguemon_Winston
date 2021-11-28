const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userPostCtrl = require('../controllers/post');
const multer = require('../middleware/mutler_post');
//Posts//
router.get('/',multer, userPostCtrl.getAllPost);
router.post('/',multer, userPostCtrl.newPost);
router.get('/:id', multer, userPostCtrl.getOnePost);
router.delete('/:id',multer, userPostCtrl.deleteOnePost);
router.get('/user:id/posts',multer, userPostCtrl.getUserPosts);

//Comments//
router.get('/:id/comments', /*auth,*/ userPostCtrl.getAllComments);
router.post('/:id/comment/', /*auth,*/ userPostCtrl.newComment);
router.delete('/comment/:id', /*auth,*/ userPostCtrl.deleteComment);

module.exports = router;