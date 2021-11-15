const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');



const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

// Connection à 

// Headers pour l'APP

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.setHeader('Vary', 'Origin');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Implantation bodyparser dans l'app
app.use(bodyParser.json());

// Implantation express dans l'app
 app.use(express.json());
// création route authentification
// app.use('/api/auth', userRoutes);

// création route sauces
// app.use('/api/posts', postRoutes);

module.exports = app;