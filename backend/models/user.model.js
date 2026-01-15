const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please provide email"]
        },
        hashed_password: {
            type: String,
            required: [true, "Please provide password"]
        }
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;