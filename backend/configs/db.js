import mongoose from "mongoose";

// MongoDB Atlas Connection
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch((err) => console.error('MongoDB Connection Error:', err));
}

export default connectDB;