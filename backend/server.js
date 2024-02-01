const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = 'mongodb+srv://<T0207>:<s7O7JXnqNs7nOzCJ>@clustertodo.bwhgqov.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log(error);
    }
}

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
})

connect();

app.listen(5000, () => {console.log("Server started on port 5000")});