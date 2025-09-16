import express from "express"
import cors from "cors"
import connectDB from "./configs/db.js";
import dotenv from "dotenv"
import upload from "./middleware/upload.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";


dotenv.config()

const app = express()
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());


// Creating upload endpoint for images  
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.PORT || 5000}/images/${req.file.filename}`
    })
})

// API Creation

app.get('/api', (req, res) => {
    res.send('Hello from Atlas-connected server!');
});
app.use('/api/product', productRouter)
app.use('/api/user', userRouter)

connectDB()
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running at http://localhost:${port}`);
    }
    else {
        console.log("ERROR:" + error);
    }
});




