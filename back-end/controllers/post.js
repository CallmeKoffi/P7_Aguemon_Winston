const Sqldb = require('../models/sqlDataBase');

// Afficher tout les post //
exports.getAllPost = (req, res, next) => {
    Sqldb.query('SELECT user.nom, user.prenom, posts.id, posts.userId, posts.title, posts.content, posts.date AS date FROM user INNER JOIN posts ON user.id = posts.userId ORDER BY date DESC', (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Créer un post //
exports.newPost = (req, res, next) => {
    Sqldbdb.query(`INSERT INTO posts VALUES (NULL, '${req.body.userId}', NOW(), '${req.body.content}')`, (error, result, field) => {
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
    Sqldbdb.query(`SELECT * FROM posts WHERE posts.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Efacer un post//
exports.deleteOnePost = (req, res, next) => {
    Sqldbdb.query(`DELETE FROM posts WHERE posts.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Modifier le post utilisateur // 
exports.modifyOnePost = (req, res, next) => {
    Sqldbdb.query(`UPDATE posts SET title = '${req.body.title}', content = '${req.body.content}' WHERE posts.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};
// Afficher les posts d'un utilisateur //
exports.getUserPosts = (req, res, next) => {
    Sqldbdb.query(`SELECT * FROM posts WHERE posts.userId = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

// Création de nouveaux com //
exports.newComment = (req, res, next) => {
    Sqldbdb.query(`INSERT INTO comments VALUES (NULL, ${req.body.userId}, ${req.params.id}, NOW(), '${req.body.content}')`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

// Affichage des com//
exports.getAllComments = (req, res, next) => {
    Sqldbdb.query(`SELECT user.id, user.nom, user.prenom, comments.id,comments.content, comments.userId, comments.date FROM user INNER JOIN comments ON user.id = comments.userId WHERE comments.postId = ${req.params.id} ORDER BY comments.date DESC`,
        (error, result, field) => {
            if (error) {
                return res.status(400).json({ error });
            }
            return res.status(200).json(result);
        });
};
// Suppression des com //
exports.deleteComment = (req, res, next) => {
    Sqldbdb.query(`DELETE FROM comments WHERE comments.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(result);
    });
};

