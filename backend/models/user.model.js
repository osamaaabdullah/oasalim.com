const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please provide email"]
        },
        hashedPassword: {
            type: String,
            required: [true, "Please provide password"]
        }
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;