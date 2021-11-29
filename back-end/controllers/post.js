const Sqldb = require('../models/sqlDataBase');

// Afficher tout les post //
exports.getAllPost = (req, res, next) => {
    Sqldb.query('SELECT p.*, u.nom, u.prenom, u.imgURL FROM user_groupomania.post p INNER JOIN user_groupomania.user u  ON u.id = p.userID ORDER BY date DESC', 
    (error, results) => {
        if (error) {
            return res.status(400).json({ error });
        }
        
        return res.status(200).json(results);
    });
};
// Créer un post //
exports.newPost = (req, res, next) => {
   
    const imgUrl = 'file' in req ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;
    Sqldb.query(`INSERT INTO user_groupomania.post (content, date, userID, imgPost) VALUES ( ?, NOW(), ?, ?)`,
    [req.body.content, req.body.userID , imgUrl],
    (error, result) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(201).json({
            message: 'Votre post à été publié !'
        })
    });
};
// Afficher un post //
exports.getOnePost = (req, res, next) => {
    Sqldb.query('SELECT p.*, u.nom, u.prenom FROM user_groupomania.post p inner join user_groupomania.user u on u.id = p.userID WHERE p.id = ?',
    [req.params.id],
     (error, result) => {
        if (error) {
            return res.status(400).json({ error });
        }
        console.log(result)
        return res.status(200).json(result);
    });
};
// Efacer un post//
exports.deleteOnePost = (req, res, next) => {
    Sqldb.query('DELETE FROM user_groupomania.post WHERE post.id = ?',
    [req.params.id], 
    (error, result) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Modifier le post utilisateur // 
exports.modifyOnePost = (req, res, next) => {
    Sqldb.query(`UPDATE user_groupomania.post SET content = ? WHERE post.id = ?`,
    [req.body.content] ,
    [req.params.id], 
    (error, result) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Afficher les posts d'un utilisateur //
exports.getUserPosts = (req, res, next) => {
    Sqldb.query(`SELECT * FROM user_groupomania.post WHERE post.userID = ?`,
    [req.params.id], 
    (error, result) => {
        if (error) {
            return res.status(400).json({ error });
        }
        console.log(result)
        return res.status(200).json(result);
    });
};

// Création de nouveaux com //
exports.newComment = (req, res, next) => {
    Sqldb.query(`INSERT INTO user_groupomania.comment VALUES (?, ?, ?, NOW())`,
    [req.body.userId, req.params.id, req.body.content],
     (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

// Affichage des com//
exports.getAllComments = (req, res, next) => {
    Sqldb.query(`SELECT user.id, user.nom, user.prenom, comment.id, comment.content, comment.userId, comment.date FROM user_groupomania.user INNER JOIN user_groupomania.comment ON user.id = comment.userID WHERE comment.postID = ${req.params.id} ORDER BY comment.date DESC`,
    
        (error, result) => {
            if (error) {
                return res.status(400).json({ error });
            }
            return res.status(200).json(result);
        });
};
// Suppression des com //
exports.deleteComment = (req, res, next) => {
    Sqldb.query(`DELETE FROM user_groupomania.comment WHERE comment.id = ?`,[req.params.id] ,
    (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

