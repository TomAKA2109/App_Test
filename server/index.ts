import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './src/routers/user';
import cors from 'cors';

dotenv.config();

const dbURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.olcgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log("DB URL:", dbURL);

const app = express();
const PORT = process.env.PORT || 3001; // Dùng PORT mặc định nếu chưa có

app.use(express.json());
app.use(cors());

// Đảm bảo đúng route '/auth'
app.use('/auth', userRouter);

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log('Connected to db successfully!');
    } catch (error) {
        console.error('Error connecting to db:', error);
    }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('❌ Server failed to start:', error);
});
