require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts.route.js');
const postRoutes = require('./routes/post.route.js');
const authRoutes = require('./routes/auth.route.js');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/posts', postsRoute);
app.use('/api/post', postRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my blog!');
});

mongoose.connect(process.env.DATABASE_URI).then(
  () => {
    console.log('Connected to DB');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
).catch(
  () => {
    console.log('Connection failed');
  }
);