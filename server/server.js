require('dotenv').config();
const mongoose = require('mongoose');
const app = require("./src/app.js");

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URI).then(
    () => {
        console.log('Connected to DB');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    }
).catch(
    () => {
        console.log('DB connection failed:', err.message);
    }
);