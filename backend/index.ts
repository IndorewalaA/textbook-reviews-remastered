import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI as string;
if (!mongoUri) {
    console.error("❌ MONGO_URI is not defined in .env file");
    process.exit(1); // Exit if no MongoDB URI is provided
}

mongoose.connect(mongoUri)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1); // Exit on database connection failure
    });

// Sample route
app.get("/", (req: Request, res: Response) => {
    res.send("Backend is running!");
});

// Start server
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
