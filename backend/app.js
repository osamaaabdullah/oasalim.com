require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose");
const Post = require('./models/post.model');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to my blog!');
})

app.post('/api/post', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

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
)