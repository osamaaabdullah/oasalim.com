require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose");
const Post = require('./models/post.model');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Welcome to my blog!');
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.get('/api/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Post.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.post('/api/post', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.put('api/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);
    if (!post) {
      return res.status(400).json({message: "Post not found"});
    }
    const updatedPost = await Post.findById(id);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.delete('/api/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if(!post) {
      return res.status(400).json({message: "Post doesn't exist"});
    }
    res.status(200).json({message: "Post deleted"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

mongoose.connect(process.env.DATABASE_URI).then(
  () => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  }
).catch(
  () => {
    console.log("Connection failed")
  }
);