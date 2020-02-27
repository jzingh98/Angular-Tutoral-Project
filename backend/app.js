const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Mathods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: '1201', title: 'First server post', content: 'This is the content of this server post'},
    { id: '1202', title: 'Second server post', content: 'This is the content of this server post'}
  ];

  return res.status(200).json({
    message: 'Posts fetched success',
    posts: posts
  });
});

module.exports = app;
