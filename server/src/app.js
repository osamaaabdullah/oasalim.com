require('dotenv').config();
const express = require('express');
const cors = require('cors');


const postsRoute = require('./routes/posts.route.js');
const postRoutes = require('./routes/post.route.js');
const authRoutes = require('./routes/auth.route.js');
const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_DEV_PORT ? `http://localhost:${process.env.FRONTEND_DEV_PORT}` : "http://localhost:5173"]

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/posts', postsRoute);
app.use('/api/post', postRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my blog!');
});



module.exports = app;