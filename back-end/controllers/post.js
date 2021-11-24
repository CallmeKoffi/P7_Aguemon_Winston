const Sqldb = require('../models/sqlDataBase');

// Afficher tout les post //
exports.getAllPost = (req, res, next) => {
    Sqldb.query('SELECT * FROM user_groupomania.post ORDER BY date DESC', 
    (error, results) => {
        if (error) {
            return res.status(400).json({ error });
        }
        console.log(results)
        return res.status(200).json(results);
    });
};
// Créer un post //
exports.newPost = (req, res, next) => {
    Sqldb.query(`INSERT INTO user_groupomania.post (content, date, userID) VALUES ( '${req.body.content}', NOW(), ${req.body.userId})`,
    (error, resut) => {
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
    Sqldb.query(`SELECT * FROM user_groupomania.post WHERE post.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Efacer un post//
exports.deleteOnePost = (req, res, next) => {
    Sqldb.query(`DELETE FROM user_groupomania.post WHERE post.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Modifier le post utilisateur // 
exports.modifyOnePost = (req, res, next) => {
    Sqldb.query(`UPDATE user_groupomania.post SET content = '${req.body.content}' WHERE post.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Afficher les posts d'un utilisateur //
exports.getUserPosts = (req, res, next) => {
    Sqldb.query(`SELECT * FROM user_groupomania.post WHERE post.userId = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

// Création de nouveaux com //
exports.newComment = (req, res, next) => {
    Sqldb.query(`INSERT INTO user_groupomania.comments VALUES ('${req.body.userId}', '${req.params.id}', '${req.body.content}', NOW())`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

// Affichage des com//
exports.getAllComments = (req, res, next) => {
    Sqldb.query(`SELECT user.id, user.nom, user.prenom, comments.id, comments.content, comments.userId, comments.date FROM user_groupomania.user INNER JOIN user_groupomania.comments ON user.id = comments.userId WHERE comments.postId = ${req.params.id} ORDER BY comments.date DESC`,
        (error, result, field) => {
            if (error) {
                return res.status(400).json({ error });
            }
            return res.status(200).json(result);
        });
};
// Suppression des com //
exports.deleteComment = (req, res, next) => {
    Sqldb.query(`DELETE FROM user_groupomania.comment WHERE comment.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

