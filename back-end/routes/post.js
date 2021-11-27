const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userPostCtrl = require('../controllers/post');
const multer = require('../middleware/multer');
//Posts//
router.get('/',multer, userPostCtrl.getAllPost);
router.post('/',multer, userPostCtrl.newPost);
router.get('/:id', /*auth,*/multer, userPostCtrl.getOnePost);
router.delete('/:id', /*auth,*/multer, userPostCtrl.deleteOnePost);
router.put('/:id', /*auth,*/multer, userPostCtrl.modifyOnePost);
router.get('/user:id/posts',multer, /*auth,*/ userPostCtrl.getUserPosts);

//Comments//
router.get('/:id/comments', /*auth,*/ userPostCtrl.getAllComments);
router.post('/:id/comment/', /*auth,*/ userPostCtrl.newComment);
router.delete('/comment/:id', /*auth,*/ userPostCtrl.deleteComment);

module.exports = router;