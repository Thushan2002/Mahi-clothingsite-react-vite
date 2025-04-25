
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const multer = require("multer")
const jwt = require("jsonwebtoken")
const { log } = require("console")

const port = process.env.PORT || 5000;


// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// API Creation

app.get('/', (req, res) => {
    res.send('Hello from Atlas-connected server!');
});

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running at http://localhost:${port}`);
    }
    else {
        console.log("ERROR:" + error);

    }
});
