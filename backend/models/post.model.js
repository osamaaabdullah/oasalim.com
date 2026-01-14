const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide post title"] 
        },

        content: {
            type: String,
            required: [true, "Please provide post content"]
        },
        category: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;