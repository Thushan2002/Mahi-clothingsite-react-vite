
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const multer = require("multer")
const jwt = require("jsonwebtoken")
const { log } = require("console")
const { type } = require("os")

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

// image Storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

// Creating upload endpoint for images  

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        successful: 1,
        image_url: `http://localhost:${process.env.PORT || 5000}/images/${req.file.filename}`
    })
})

// schema for creating products

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    available: {
        type: Boolean,
        default: true,
    },
})

app.post("/addproduct", async (req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    await product.save()
    res.json({
        success: true,
        name: req.body.name,
    })
})


